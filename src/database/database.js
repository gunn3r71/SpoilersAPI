const sequelize = require('sequelize'); //Importando biblioteca ORM que será utilizada

const env = process.env.NODE_ENV || 'dev';

const config = require('./../config/config')[env];

const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;