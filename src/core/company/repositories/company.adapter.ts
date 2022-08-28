import { CompanyCredentialsRepository } from './companyCredential'
import { CreateCompanyRepository } from './createCompany.repository'

export type CompanyAdapter = CreateCompanyRepository & CompanyCredentialsRepository
