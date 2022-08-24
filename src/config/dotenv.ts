import dotenv from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config({
        path: path.join(process.cwd(), `.env.${ process.env.NODE_ENV || 'development' }`)
    })
}
