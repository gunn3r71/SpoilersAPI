const sequelize = require('sequelize'); //Importando biblioteca ORM que será utilizada

const env = process.env.NODE_ENV || 'dev';

const config = require('./../config/config')[env];

const sequelize = new Sequelize(
    config.dev.database.name,
    config.dev.database.user,
    config.dev.database.password,
    {
        host: config.dev.database.host,
        dialect: config.dev.database.dialect
    }
);