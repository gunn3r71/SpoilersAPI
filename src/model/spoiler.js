const sequelize = require('sequelize');
const _sequelize = require('../database/database');

const spoiler = _sequelize.define(
    'spoiler', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER
        },
        title: {
            allowNull: false,
            type: sequelize.STRING(150),
            validate: {
                len: [2, 150]
            }
        },
        spoiler: {
            allowNull: false,
            type: sequelize.STRING(50),
            validate: {
                len: [2,50]
            }
        },
        description: {
            allowNull: false,
            type: sequelize.STRING(250),
            validate:{
                len: [2,250]
            }
        },
        status: {
            allowNull: false,
            type: sequelize.BOOLEAN
        }
    }
);

module.exports = spoiler;