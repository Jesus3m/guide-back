/* eslint-disable no-console */
import 'express-async-errors'
import './config/dotenv'
import './config/module-aliases'
import { MongoDBConnection } from '@config/connections/mongo'
import { intiHttpServer } from './config/servers/http'
import { startQueueServer } from '@config/servers/queue'
import { config } from '@config/index'
import { SqlConnection } from '@config/connections/sql'
import { initCrons } from '@source/schedules/cron'

// Start Mongodb connection
MongoDBConnection.connect()

SqlConnection.connect()
const conn = SqlConnection.useDB('empiretive', { cache: true })
const app = intiHttpServer() // HTTP SERVER
startQueueServer() // Message Broker Listeners

app.listen(config.API.PORT, () => {
    console.log('Company Service Listen')
})

// Init Schedules Jobs
initCrons()
