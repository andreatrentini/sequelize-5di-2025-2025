const fs = require('fs');

const config = {
    port: 3000,
    username: 'root',
    password: fs.readFileSync('/run/secrets/dbPassword'),
    dbname: 'compagniaaerea',
    host: 'sqlserver',
    dialect: 'mysql'
}

module.exports = config;