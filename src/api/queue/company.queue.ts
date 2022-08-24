import { Channel, ConsumeMessage } from 'amqplib'

export const companyAsserts = (channel: Channel) => {
    channel.assertQueue('companyCreated')
}

export const companyListeners = (channel: Channel) => {
    // channel.consume('companyCreated', (msg: ConsumeMessage | null) => {
    //     channel.ack(msg!) // Listen only one times the same event data
    //     const data = JSON.parse(msg!.content?.toString())
    //     console.log(data, 'CompanyCreated')
    // })
}
