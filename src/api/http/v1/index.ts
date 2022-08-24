import { Request, Response, Router } from 'express'
import companyRouter from './company/company.router'
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.redirect('http://localhost:4000/api/v1/docs')
})
router.use('/company', companyRouter)
export default router
