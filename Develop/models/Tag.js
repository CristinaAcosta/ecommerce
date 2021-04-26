const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
  },
  product_id: {
     /* References the product model's id??*/
    type: DataTypes.INTEGER
  },
tag_id: {
  /* References the tag model's id??*/
  type: DataTypes.INTEGER
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
