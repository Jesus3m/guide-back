import { SqlConnection } from '@config/connections/sql'
import cron from 'node-cron'
export const initCrons = () => {
    // Every 20 minutes cron job
    cron.schedule('*/20 * * * *', () => {
        SqlConnection.clearExpiredConnections()
    })
}
