const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
  },
  product_id: {
    /* References the product model's id??*/
   type: DataTypes.INTEGER,
   References: {
     model: 'product',
     key: 'id',
     unique: false
   }
 },
tag_id: {
 /* References the tag model's id??*/
 type: DataTypes.INTEGER,
 References: {
   model: 'tag',
   key: 'id',
   unique: false
 }
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
