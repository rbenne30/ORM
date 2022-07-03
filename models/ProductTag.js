const { STRING } = require('sequelize');
const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {} 

ProductTag.init(
  {
    // define columns
    productID: {
      type: INTEGER,
      primaryKey: true 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
