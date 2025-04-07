const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.dbname, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

module.exports = sequelize;