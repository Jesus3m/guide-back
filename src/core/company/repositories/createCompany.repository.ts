import { Company } from '../company'
import { CompanyEntity } from '../company.entity'

export interface CreateCompanyRepository {
    createCompany: (company: Company) => Promise<CompanyEntity>
}
