import { SqlConnection } from '@config/connections/sql'
import { SqlSchemas } from '@source/data/schemas/sql/schema'
import path from 'path'
import { readJsonFile } from './readJsonFile'

export const defineModels = () => {
    const tenantsDbPath = path.join(process.cwd(), 'src', 'config', 'connections', 'tenants_db.json')
    const dbs: any[] = readJsonFile(tenantsDbPath)
    dbs.forEach(x => {
        Object.entries(SqlSchemas).forEach(([key, value] : [string, any]) => {
            const model = SqlConnection.modelFactory(key, value, x.tenant)
            model.sync({ alter: true, force: true })
        })
    })
}
