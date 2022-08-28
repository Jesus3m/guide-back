import { CompanyDatasource } from '@source/data'
import companyEvents from '@source/event/company.events'
import { Company } from './company'
import { CompanyDBCredentials, CompanyEntity } from './company.entity'
import { createCompanyUseCase } from './usecases/createCompany.useCase'
import { generateCompanyCredentials } from './usecases/generateCompanyCredentials.useCase'

export class CompanyService {
    constructor (private context: any) { }

    async createCompany (company: CompanyEntity & CompanyDBCredentials) {
        const companyDataSource = new CompanyDatasource(this.context.tenant)

        let newCompany = new Company(company)

        const companyCreated = await createCompanyUseCase(companyDataSource)(newCompany)

        if (companyCreated) {
            newCompany = generateCompanyCredentials(companyDataSource)(company, this.context.tenant)
        }

        await companyEvents.companyCreated(newCompany)

        return newCompany
    }
}
