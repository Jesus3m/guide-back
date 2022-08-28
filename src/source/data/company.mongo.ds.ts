import { Model } from 'mongoose'
import { MongoConnection } from '@config/connections/mongo'
import { CompanyEntity } from '@core/company/company.entity'
import { CompanySchema } from './schemas/mongo/company.mongo.schema'

export class CompanyMongoDatasource {
    CompanyModel: Model<CompanyEntity>
    constructor (tenant: string) {
        this.CompanyModel = MongoConnection.modelFactory<CompanyEntity>('Company', CompanySchema, tenant)!
    }

    async createCompany (company: CompanyEntity) {
        const newCompany = new this.CompanyModel(company)
        await newCompany.save()
        return newCompany as CompanyEntity
    }
}
