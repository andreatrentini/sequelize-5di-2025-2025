const Regione = require('./regione');
const sequelize = require('../db');

async function init() {
    try {
        await sequelize.sync({});        
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = init