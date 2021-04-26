const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
  const tagData = await ProductTag.findAll({
   // be sure to include its associated Product data
    include: [{model: Product, through: Tag, as: "Product_tags"}]
  });
 
  res.status(200).json(tagData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await ProductTag.findByPk(req.params.id, {
       // be sure to include its associated Product data
      include: [{model: Product, through: Tag, as: "Product_tags"}]
    });

    if(!tagData){
      res.status(404).json({message: `Product tag not found with id ${req.params.id}`});
      return;
    }


    res.status(200).json(tagData);  
  } catch (error) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await ProductTag.create(req,body);

    res.status(200).json(tagData);
} catch (error){
    res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagData = await ProductTag.update(
      {
        tagName: req.body.tagName,
      },
      {
        where: {
          tag_name: req.params.tag_name,
        },
      }
    );

    if(!tagData){
      res.status(404).json({message: `Product tag not updated with id ${req.params.id}`});
      return;
    }

    res.status(200).json(tagData);  
} catch(error){
  res.status(404).json(err);
}
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagResults = await ProductTag.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!tagResults){
      res.status(404).json({message: 'Product tag not deleted with id ${req.params.id}'});
      return;
    }
    
    res.status(200).json(tagResults);  
  } catch (error) {
    res.status(500).json(err);
  }
});


module.exports = router;
