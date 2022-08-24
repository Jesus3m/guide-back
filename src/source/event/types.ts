export interface AmqpAdapter {
    getChannel: () => Promise<any>
    sendToQueue: (queue: string, data: Buffer) => Promise<any>
}
