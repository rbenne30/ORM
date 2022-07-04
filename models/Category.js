const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product.js');
//

class Category extends Model {Product}

Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.String,
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
