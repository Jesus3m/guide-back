import { Request, Response, Router } from 'express'
import { CompanyService } from '@core/company/company.service'
import { CompanyController } from './company.controller'
import { Responser } from '@common/utils/Response'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const companyController = new CompanyController(new CompanyService({ tenant: 'empiretive' }))
    const data = await companyController.createCompany(req.body)

    new Responser(data, 200).send(res)
})

export default router
