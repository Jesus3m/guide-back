export const config = {
    API: {
        PORT: process.env.PORT || 5000,
        VERSION: process.env.VERSION || 1,
        HOSTNAME: process.env.HOSTNAME || 'localhost',
        PROTOCOL: process.env.PROTOCOL || 'http'
    },
    AMQP: {
        HOST: process.env.AMQP_HOST || 'amqp://localhost:5672'
    },
    MONGODB: {
        HOST: process.env.MONGODB_HOST,
        POST: process.env.MONGODB_PORT,
        USER: process.env.MONGODB_USER,
        PASS: process.env.MONGODB_PASS,
        DATABASE: process.env.MONGODB_DB
    }
}
