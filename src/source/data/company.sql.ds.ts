import { ModelConvert, SqlConnection } from '@config/connections/sql'
import { CompanyEntity } from '@core/company/company.entity'
import { CompanyAdapter } from '@core/company/repositories/company.adapter'
import { CompanySchema } from './schemas/sql/company.sql.schema'

export class CompanySqlDatasource implements CompanyAdapter {
    CompanyModel: ModelConvert<CompanyEntity>
    constructor (tenant: string) {
        this.CompanyModel = SqlConnection.modelFactory<CompanyEntity>('Company', CompanySchema, tenant)!
    }

    async createCompany (company: CompanyEntity) {
        const newCompany = await this.CompanyModel.create(company)
        return newCompany.get()
    }

    async saveApiKeys (companyId: string) {

    }
}
