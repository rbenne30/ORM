const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection.js');

class Tag extends Model { Product }

Tag.init(
  {
    // define columns
    TagName: {
      type: DataTypes.STRING,
      primaryKey: true 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
