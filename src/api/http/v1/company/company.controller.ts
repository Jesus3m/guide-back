import { Body, Delete, Get, Path, Post, Put, Query, Route } from 'tsoa'
import { CompanyService } from '@core/company/company.service'
import { CompanyDBCredentials, CompanyEntity } from '../../../../core/company/company.entity'

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

    @Post('')
    async createCompany (@Body() body: CompanyEntity & CompanyDBCredentials): Promise<CompanyEntity> {
        const data = await this.service.createCompany(body)
        return data
    }

    @Put('{id}')
    async updateCompany (@Body() body: CompanyEntity, @Path('id') id: string): Promise<CompanyEntity> {
        return {} as CompanyEntity
    }

    @Delete('{id}')
    async deleteCompany (@Path('id') id: string): Promise<CompanyEntity> {
        return {} as CompanyEntity
    }

    @Get('{id}')
    async getCompanyById (@Path('id') id: string): Promise<CompanyEntity> {
        return {} as CompanyEntity
    }
}
