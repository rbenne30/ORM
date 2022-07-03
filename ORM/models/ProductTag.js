const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection');

class ProductTag extends Model {} 

ProductTag.init(
  {
    // define columns
    productID: {
      type: DataTypes.INTEGER,
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
