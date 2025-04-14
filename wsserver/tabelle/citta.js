const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Citta extends Model {};

Citta.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    fkregione: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Citta',
    tableName: 'Citta',
    timestamps: false
}
);

module.exports = Citta;