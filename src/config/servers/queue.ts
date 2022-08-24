import { queueListener } from '@api/queue'

export const startQueueServer = async () => {
    return queueListener()
}
