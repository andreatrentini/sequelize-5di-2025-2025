const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Aereoporto extends Model {};

Aereoporto.init({
    codice: {
        type: DataTypes.STRING(3),
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    fkcitta: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Aereoporti',
    tableName: 'Aereoporti',
    timestamps: false
}
);

module.exports = Aereoporto;