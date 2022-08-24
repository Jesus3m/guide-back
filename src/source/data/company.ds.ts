import mongoose, { Model } from 'mongoose'
import { MongoDBConnection } from '@config/connections/mongo'
const CompanySchema = new mongoose.Schema({
    name: String
})

export class CompanyMongoDatasource {
    CompanyModel: Model<{name: string}>
    constructor (tenant: string) {
        this.CompanyModel = MongoDBConnection.modelFactory<{name: string}>('Company', CompanySchema, tenant)!
    }

    async createCompany (company: any) {
        const newCompany = new this.CompanyModel(company)
        await newCompany.save()
        return newCompany
    }
}
