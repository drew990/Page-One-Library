const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      report_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'report',
          key: 'id'
        }
      }
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);


module.exports = Comment;
