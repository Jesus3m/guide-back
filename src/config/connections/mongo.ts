import mongoose, { Connection, Schema } from 'mongoose'
import { config } from '@config/index'
export class MongoDBConnection {
    static connection: Connection

    static connect (companyUri?: string) {
        const connectionUri = `mongodb://${ config.MONGODB.USER ? `${ config.MONGODB.USER }:${ config.MONGODB.PASS }@` : '' }${ config.MONGODB.HOST }`
        if (!MongoDBConnection.connection) {
            const db = mongoose.createConnection(companyUri! || connectionUri, {
                socketTimeoutMS: 30000,
                keepAlive: true,
                maxPoolSize: 10
            })

            MongoDBConnection.connection = db
        }
        return MongoDBConnection.connection
    }

    useDB (tenant: string) {
        const conn = MongoDBConnection.connect()
        if (conn) {
            const db = conn.useDb(`${ tenant }`, { useCache: true })
            return db
        }
    }

    static modelFactory<T> (model: string, schema: Schema, tenant: string) {
        const db = new MongoDBConnection().useDB(tenant)
        db?.model<T>(model, schema)
        return db?.model<T>(model)
    }
}
