/* eslint-disable no-console */
import 'express-async-errors'
import './config/dotenv'
import './config/module-aliases'
import { MongoConnection } from '@config/connections/mongo'
import { intiHttpServer } from './config/servers/http'
import { startQueueServer } from '@config/servers/queue'
import { config } from '@config/index'
import { SqlConnection } from '@config/connections/sql'
import { initCrons } from '@source/schedules/cron'
import { defineModels } from '@common/utils/defineModel'

MongoConnection.connect() // Start Mongodb connection

SqlConnection.connect() // Start Sql Connection

defineModels() // Register all sequelize model for each tenant

const app = intiHttpServer() // HTTP SERVER
startQueueServer() // Message Broker Listeners

app.listen(config.API.PORT, () => {
    console.log(`${ config.API.SERVICE_PATH } Service Listen`)
})

initCrons() // Init Schedules Jobs
