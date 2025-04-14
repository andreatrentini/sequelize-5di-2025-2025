const Regione = require('./regione');
const Citta = require('./citta');
const Aereoporto = require('./aereoporto');
const Volo = require('./volo');
const sequelize = require('../db');

// Relazioni

Citta.belongsTo(Regione, {
    foreignKey: 'fkregione'
});

Regione.hasMany(Citta, {
    foreignKey: 'fkregione'
});

Aereoporto.belongsTo(Citta, {
    foreignKey: 'fkcitta'
});

Citta.hasMany(Aereoporto, {
    foreignKey: 'fkcitta'
});

Volo.belongsTo(Aereoporto, {
    foreignKey: 'fkaereoporto_arrivo'
});

Aereoporto.hasMany(Volo, {
    foreignKey: 'fkaereoporto_arrivo'
});

Volo.belongsTo(Aereoporto, {
    foreignKey: 'fkaereoporto_partenza'
});

Aereoporto.hasMany(Volo, {
    foreignKey: 'fkaereoporto_partenza'
});

async function init() {
    try {
        // senza parametri: crea la tabella nel database se non esiste
        // force: true: elimina e ricrea la tabella nel database
        // Alter: true: modifica la tabella nel database secondo il modello definito
        // Sincronizza l'intero insieme di modelli
        await sequelize.sync({force: true});
        // Sincronizzo il singolo modello
        // await Regione.sync();
    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = init