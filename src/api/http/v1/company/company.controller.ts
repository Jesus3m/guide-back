import { Body, Delete, Get, Path, Post, Put, Query, Route } from 'tsoa'
import { CompanyService } from '@core/company/company.service'
import { CompanyEntity } from '../../../../core/company/company.entity'

@Route('company')
export class CompanyController {
    service: CompanyService
    constructor (service: CompanyService) {
        this.service = service
    }

    @Get('/')
    async getCompanies (@Query() query: any): Promise<CompanyEntity[]> {
        const data = await this.service.createCompany(query)
        return [data]
    }

    @Post('/')
    async createCompany (@Body() body: CompanyEntity): Promise<CompanyEntity> {
        const data = await this.service.createCompany(body)
        return data
    }

    @Put('/{id}')
    async updateCompany (@Body() body: CompanyEntity, @Path('id') id: string): Promise<CompanyEntity> {
        const data = await this.service.createCompany(body)
        return data
    }

    @Delete('/{id}')
    async deleteCompany (@Path('id') id: string): Promise<CompanyEntity> {
        const data = await this.service.createCompany(id)
        return data
    }

    @Get('/{id}')
    async getCompanyById (@Path('id') id: string): Promise<CompanyEntity> {
        const data = await this.service.createCompany(id)
        return data
    }
}
