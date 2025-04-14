const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Volo extends Model {};

Volo.init({
    codice: {
        type: DataTypes.STRING(7),
        primaryKey: true,
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    ora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    fkaereoporto_partenza: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    fkaereoporto_arrivo: {
        type: DataTypes.STRING(3),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Voli',
    tableName: 'Voli',
    timestamps: false
}
);

module.exports = Volo;