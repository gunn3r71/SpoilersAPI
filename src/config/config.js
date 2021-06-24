module.exports = {
    dev: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'spoilers_db',
            dialect: 'mysql',
            user: 'root',
            password: 'lucas@development'
        }
    },
    prod: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}