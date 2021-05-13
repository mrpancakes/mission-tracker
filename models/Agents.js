const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Agents extends Model {

}
Agents.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        specialties: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id',
            }
      },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'agents',
    }
);
module.exports = Agents;