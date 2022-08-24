/* eslint-disable no-console */
import 'express-async-errors'
import './config/dotenv'
import './config/module-aliases'
import { MongoDBConnection } from '@config/connections/mongo'
import { intiHttpServer } from './config/servers/http'
import { startQueueServer } from '@config/servers/queue'
import { config } from '@config/index'

// Start Mongodb connection
new MongoDBConnection().getConnection(`mongodb://${ config.MONGODB.USER ? `${ config.MONGODB.USER }:${ config.MONGODB.PASS }@` : '' }${ config.MONGODB.HOST }`)

const app = intiHttpServer() // HTTP SERVER
startQueueServer() // Message Broker Listeners

app.listen(config.API.PORT, () => {
    console.log('Company Service Listen')
})
