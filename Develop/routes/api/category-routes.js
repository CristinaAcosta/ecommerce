const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (_req, res) => {
  // find all categories
  try{
  const categoryData = await Category.findAll({
    // be sure to include its associated Products
    include: [{model: Product, through: Category, as: "categorized_products"}]
  });
 
  res.status(200).json(categoryData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
       // be sure to include its associated Products
      include: [{model: Product, through: Category, as: "categorized_products"}]
    });

    if(!categoryData){
      res.status(404).json({message: `Product Category not found with id ${req.params.id}`});
      return;
    }

    res.status(200).json(categoryData);  
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
      const categoryData = await Category.create(req,body);

      res.status(200).json(categoryData);
  } catch (error){
      res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
      const categoryData = await Category.update(
        {
          cateName: req.body.cateName,
        },
        {
          where: {
            category_name: req.params.category_name,
          },
        }
      );

      if(!categoryData){
        res.status(404).json({message: `Category not updated with id ${req.params.id}`});
        return;
      }

      res.status(200).json(categoryData);  
  } catch(error){
    res.status(404).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catResults = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!catResults){
      res.status(404).json({message: `Category not deleted with id ${req.params.id}`});
      return;
    }

    res.status(200).json(catResults);  
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
