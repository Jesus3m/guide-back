import { Company } from '../company'
import { CreateCompanyRepository } from '../repositories/createCompany.repository'

export const createCompanyUseCase = (repository: CreateCompanyRepository) => async (company: Company) => {
    return await repository.createCompany(company)
}
