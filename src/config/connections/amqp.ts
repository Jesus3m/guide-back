import amqplib, { Channel, Connection } from 'amqplib'
import { config } from '..'
export class RabbitMQ {
    static connection: Connection
    static channel: Channel

    async connect () {
        try {
            const amqpServer = config.AMQP.HOST
            let connection
            if (!RabbitMQ.connection) {
                connection = await amqplib.connect(amqpServer)
                RabbitMQ.connection = connection
            } else {
                connection = RabbitMQ.connection
            }
            RabbitMQ.channel = await connection.createChannel()
        } catch (error) {
        }
    }

    async getChannel () {
        await this.connect()
        return RabbitMQ.channel
    }
}
