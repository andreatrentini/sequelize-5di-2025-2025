const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Regione extends Model {};

Regione.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Regioni',
    tableName: 'Regioni',
    timestamps: false
});

module.exports = Regione;


