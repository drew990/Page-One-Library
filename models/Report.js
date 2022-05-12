const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { report } = require('../controllers');

// create Post model

class Report extends Model {}

Report.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        report_author: {
            type: DataTypes.STRING,
            allowNull: true
        },
        report_content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        report_score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        report_url: {
            type: DataTypes.STRING,
            allowNull:true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'report'
    }

)


module.exports = Report;

