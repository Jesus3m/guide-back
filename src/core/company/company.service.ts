import { CompanyDatasource } from '@source/data'
import companyEvents from '@source/event/company.events'

export class CompanyService {
    constructor (private context: any) {

    }

    async createCompany (company: any) {
        const companyDataSource = new CompanyDatasource(this.context.tenant)

        const companyCreated = await companyDataSource.createCompany(company)
        await companyEvents.companyCreated(company)
        return companyCreated
    }
}
