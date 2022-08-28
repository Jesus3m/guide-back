export const config = {
    API: {
        PORT: process.env.PORT || 5000,
        VERSION: process.env.VERSION || 1,
        HOSTNAME: process.env.HOST || 'localhost',
        PROTOCOL: process.env.PROTOCOL || 'http',
        SERVICE_PATH: process.env.SERVICE_PATH || 'company',
        SERVICE_URL: process.env.SERVICE_URL

    },
    AMQP: {
        HOST: process.env.AMQP_HOST || 'amqp://localhost:5672'
    },
    MONGODB: {
        HOST: process.env.MONGODB_HOST,
        PORT: process.env.MONGODB_PORT,
        USER: process.env.MONGODB_USER,
        PASS: process.env.MONGODB_PASS,
        DATABASE: process.env.MONGODB_DB
    },
    MYSQL: {
        HOST: process.env.MYSQL_HOST || 'localhost',
        PORT: process.env.MYSQL_PORT || '3306',
        USER: process.env.MYSQL_USER || 'root',
        PASS: process.env.MYSQL_PASS || 'root',
        DATABASE: process.env.MYSQL_DB || 'company',
        DIALECT: process.env.MYSQL_DIALECT || 'mysql'
    }
}
