import fs from 'fs'
import path from 'path'
import { Company } from '../company'
import { CompanyDBCredentials, CompanyEntity } from '../company.entity'
import { CompanyCredentialsRepository } from '../repositories/companyCredential'

export const generateCompanyCredentials = (repository: CompanyCredentialsRepository) => (company: CompanyEntity & CompanyDBCredentials, tenant: string): Company => {
    const tenantsDbPath = path.join(process.cwd(), 'src', 'config', 'connections', 'tenants_db.json')
    let tenantsDb: any[]
    if (fs.existsSync(tenantsDbPath)) {
        tenantsDb = JSON.parse(fs.readFileSync(tenantsDbPath, { encoding: 'utf-8' }))

        const tenantFound = tenantsDb.find(x => x.tenant === tenant)

        if (tenantFound) return new Company(company)

        const addTenant = [...tenantsDb, {
            tenant,
            name: company.user || 'root',
            host: company.host || 'localhost',
            password: company.password || 'root'
        }]
        fs.writeFileSync(tenantsDbPath, JSON.stringify(addTenant), { encoding: 'utf-8' })
    } else {
        fs.writeFileSync(tenantsDbPath, JSON.stringify([
            {
                tenant,
                name: company.user || 'root',
                host: company.host || 'localhost',
                password: company.password || 'root'
            }
        ]), { encoding: 'utf-8' })
    }

    return new Company(company)
}
