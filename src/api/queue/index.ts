import { RabbitMQ } from '../../config/connections/amqp'
import { companyAsserts, companyListeners } from './company.queue'

export const queueListener = async () => {
    const rabbitmq = new RabbitMQ()

    const channel = await rabbitmq.getChannel()

    // Asserts
    companyAsserts(channel)

    // Listeners
    companyListeners(channel)

    return channel
}

