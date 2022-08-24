import express, { Application } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import router from '../../api/http/v1'
import { config } from '@config/index'
import { withContext } from '@common/middlewares/contextMiddleware'
import { ErrorMiddleware } from '@common/middlewares/errorMiddleware'

export const intiHttpServer = (): Application => {
    const app = express()

    // Middlewares
    app.use(express.json())
    // app.use(express.urlencoded({ extended: true }))
    app.use(cors({
        origin: '*'
    }))

    const contextMiddleware = withContext(request => {
        return {
            tenant: 'empiretive'
        }
    })
    // Static Routes
    app.use(express.static('public'))

    // Router
    app.use(`/api/v${ config.API.VERSION }`, [contextMiddleware], router)

    app.use(
        '/api/v1/docs',
        swaggerUi.serve,
        swaggerUi.setup(undefined, {
            swaggerOptions: {
                url: '/swagger.json'
            }
        })
    )

    // Error Middleware
    app.use(ErrorMiddleware)

    return app
}
