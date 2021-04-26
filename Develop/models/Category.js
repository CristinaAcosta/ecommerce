const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
     // define columns
    id: {
      type: DataTypes.INTEGER, 
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
  },
  catergory_name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  catergory_id: {
    type: DataTypes.INTEGER
      /* References the Category model's id??*/
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
