import { jsonToBuffer } from '@utils/jsonToBuffer'
import { RabbitMQ } from '@config/connections/amqp'
import { AmqpAdapter } from './types'

export class CompanyEventHandlers {
    constructor (private amqpAdapter: AmqpAdapter) {
    }

    async companyCreated (company: any) {
        const channel = await this.amqpAdapter.getChannel()
        channel.sendToQueue('companyCreated', jsonToBuffer(company))
    }
}

export default new CompanyEventHandlers(new RabbitMQ() as unknown as AmqpAdapter)
