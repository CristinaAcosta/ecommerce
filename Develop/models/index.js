// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  through:{
    model: Product,
    unique: false
  },
  as: "product_categories"
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Product, 
    unique:false
  },
  as: "categorized_products"
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  }, 
  as: "Product_tag"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: {
    model: ProductTag,
    unique: false
  },
  as: "tagged_products"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
