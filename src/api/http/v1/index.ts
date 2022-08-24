import { config } from '@config/index'
import { Request, Response, Router } from 'express'
import companyRouter from './company/company.router'
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.redirect(`${ config.API.PROTOCOL }://${ config.API.HOSTNAME }:${ config.API.PORT }/api/v${ config.API.VERSION }/docs`)
})
router.use('/company', companyRouter)
export default router
