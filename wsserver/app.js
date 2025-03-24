const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors');
const config = require('./config');

const app = express();
app.use(cors());

const sequelize = new Sequelize(config.dbname, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

app.get('/test', async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Accesso avvenuto correttamente.');
        return res.status(200).send('Accesso avvenuto correttamente.');
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

const server = app.listen(config.port, () => {
    console.log(`Server in ascolto sulla porta ${config.port}...`);
})
