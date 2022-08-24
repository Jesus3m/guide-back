import { ModelConversion, SqlConnection } from '@config/connections/sql'
import { CompanyEntity } from '@core/company/company.entity'
import { CompanySchema } from './schemas/company.sql.schema'

export class CompanySqlDatasource {
    CompanyModel: ModelConversion<CompanyEntity>
    constructor (tenant: string) {
        this.CompanyModel = SqlConnection.modelFactory<CompanyEntity>('Company', CompanySchema, tenant)!
    }

    async createCompany (company: CompanyEntity) {
        const newCompany = await this.CompanyModel.create(company)
        return newCompany
    }
}
