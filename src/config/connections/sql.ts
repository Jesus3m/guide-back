import moment from 'moment'
import { BuildOptions, Dialect, Model, ModelAttributes, ModelOptions, Sequelize } from 'sequelize'
import mysql, { Connection } from 'mysql2'
import { config } from '..'

export interface IModel<T extends object> extends Model<T> {
    setDataValues: (column: string, value: any) => void
}

export type ModelConvert<T extends object> = typeof Model & {
    new(values?: T, options?: BuildOptions): IModel<T>
}

export class SqlConnection {
    static mainConnection: Connection
    static connections: { [key: string]:{expire: Date, conn: Sequelize | undefined} | undefined} = {} as { [key: string]:{expire: Date, conn: Sequelize | undefined}}
    static host: string
    static dialect: Dialect
    static port: string
    static username: string
    static password: string

    static connect (): Connection {
        SqlConnection.host = config.MYSQL.HOST
        SqlConnection.port = config.MYSQL.PORT
        SqlConnection.username = config.MYSQL.USER
        SqlConnection.password = config.MYSQL.PASS
        SqlConnection.dialect = config.MYSQL.DIALECT as Dialect

        SqlConnection.mainConnection = mysql.createConnection({
            host: config.MYSQL.HOST,
            user: config.MYSQL.USER,
            password: config.MYSQL.PASS
        })
        return SqlConnection.mainConnection
    }

    static createDatabase (name: string): void {
        SqlConnection.mainConnection.query(`CREATE DATABASE IF NOT EXISTS ${ name }`)
    }

    static clearExpiredConnections (): void {
        Object.entries(SqlConnection.connections).forEach(([key, value]: [string, any]) => {
            if (moment(value.expire).isBefore(moment())) {
                SqlConnection.connections[key]!.conn?.close()
                SqlConnection.connections[key] = undefined
            }
        })
    }

    static useDB (tenant: string, params?: { cache: boolean }): Sequelize {
        if (!SqlConnection.connections?.[tenant]) {
            SqlConnection?.createDatabase(tenant)
            const conn = new Sequelize(tenant, SqlConnection.username, SqlConnection.password, {
                host: SqlConnection.host,
                dialect: SqlConnection.dialect,
                logging: false
            })
            if (params?.cache) {
                SqlConnection.connections[tenant] = {
                    expire: moment().add(19, 'minutes').toDate(),
                    conn
                }
            }
            return conn
        }
            SqlConnection.connections[tenant]!.expire = moment().add(20, 'minutes').toDate()
            return SqlConnection.connections[tenant]!.conn!
    }

    static modelFactory<T extends object> (model: string, schema: ModelAttributes<Model, T>, tenant: string, options?: ModelOptions) {
        const conn = SqlConnection.useDB(tenant, { cache: true })
        if (!conn.models[model]) {
             <ModelConvert<T>>conn.define<Model<T>>(model, schema, options)
        }
        return <ModelConvert<T>>conn.models[model]
    }
}
