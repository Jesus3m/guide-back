import { Model } from 'mongoose'
import { MongoDBConnection } from '@config/connections/mongo'
import { CompanyEntity } from '@core/company/company.entity'
import { CompanySchema } from './schemas/company.mongo.schema'

export class CompanyMongoDatasource {
    CompanyModel: Model<CompanyEntity>
    constructor (tenant: string) {
        this.CompanyModel = MongoDBConnection.modelFactory<CompanyEntity>('Company', CompanySchema, tenant)!
    }

    async createCompany (company: CompanyEntity) {
        const newCompany = new this.CompanyModel(company)
        await newCompany.save()
        return newCompany as CompanyEntity
    }
}
