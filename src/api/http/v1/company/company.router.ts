import { Request, Response, Router } from 'express'
import { CompanyService } from '@core/company/company.service'
import { CompanyController } from './company.controller'
import { Responser } from '@common/utils/Response'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    new Responser({}, 200).send(res)
})

router.get('/:id', async (req: Request, res: Response) => {
    new Responser({}, 200).send(res)
})

router.put('/:id', async (req: Request, res: Response) => {
    const companyController = new CompanyController(new CompanyService(req.context))

    const data = await companyController.createCompany(req.body)

    new Responser(data, data ? 200 : 404).send(res)
})

router.post('/', async (req: Request, res: Response) => {
    const companyController = new CompanyController(new CompanyService(req.context))

    const data = await companyController.createCompany(req.body)

    new Responser(data, data ? 200 : 404).send(res)
})

router.delete('/:id', async (req: Request, res: Response) => {
    const companyController = new CompanyController(new CompanyService(req.context))

    const data = await companyController.createCompany(req.body)

    new Responser(data, data ? 200 : 404).send(res)
})
export default router
