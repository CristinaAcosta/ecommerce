const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
  const categoryData = await Category.findAll({
    // be sure to include its associated Products
    include: [{model: Product, as: "categorized_products"}]
  });
 
  res.status(200).json(categoryData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
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
        res.status(404).json({message: 'Category not updated with id ${req.params.id}'});
        return;
      }

      res.status(200).json(categoryData);  
  } catch(error){
    res.status(404).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const results = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!results){
      res.status(404).json({message: 'Category not deleted with id ${req.params.id}'});
      return;
    }
    
    res.status(200).json(results);  
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
