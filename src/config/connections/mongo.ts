import mongoose, { Connection, Schema } from 'mongoose'
export class MongoDBConnection {
    static connection: Connection

    getConnection (companyUri?: string) {
        if (!MongoDBConnection.connection) {
            const db = mongoose.createConnection(companyUri!, {
                socketTimeoutMS: 30000,
                keepAlive: true,
                maxPoolSize: 10
            })

            MongoDBConnection.connection = db
        }
        return MongoDBConnection.connection
    }

    getTenantDb (tenant: string) {
        const conn = this.getConnection()
        if (conn) {
            const db = conn.useDb(`${ tenant }`, { useCache: true })
            return db
        }
    }

    static modelFactory<T> (model: string, schema: Schema, tenant: string) {
        const db = new MongoDBConnection().getTenantDb(tenant)
        db?.model<T>(model, schema)
        return db?.model<T>(model)
    }
}
