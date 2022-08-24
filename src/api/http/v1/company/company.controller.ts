import { Body, Post, Route } from 'tsoa'
import { CompanyService } from '@core/company/company.service'

interface CreateCompanyDTO {
    name: string,
    phone: string,
    nit: string
}

@Route('company')
export class CompanyController {
    service: CompanyService
    constructor (service: CompanyService) {
        this.service = service
        this.createCompany = this.createCompany.bind(this)
    }

    @Post('/')
    async createCompany (@Body() body: CreateCompanyDTO): Promise<{name: string, description: string, id: string}> {
        const data = await this.service.createCompany(body)
        return data as any
    }
}
