const express = require('express');

const config = require('./config');
const sequelize = require('./db');
const init = require('./tabelle/init');

const app = express();

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

app.get('/init', async (req, res) => {
    try {
        await init();
        console.log('Inizializzazione avvenuta correttamente.');
        return res.status(200).send('Inizializzazione avvenuta correttamente.');
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

const server = app.listen(config.port, () => {
    console.log(`Server in ascolto sulla porta ${config.port}...`);
})
