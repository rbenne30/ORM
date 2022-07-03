const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection.js');
const Product = require('./Product.js');
//

class Category extends Model {Product}

Category.init(
  {
    // define columns
    CategoryName: {
      type: String,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
