import { Router } from 'express'
import companyRouter from './company/company.router'
const router = Router()

router.use('/company', companyRouter)
export default router
