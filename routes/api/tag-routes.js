const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then((tagdata) => {
    res.json(tagdata);
  });
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
    Tag.findOne({
      where: {
        id:req.params.id
      },
      include: [{
        model: Product,
      attributes: ['id', 'product_name', 'price', 'stock','category_id']
      }
      ]
    })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({message:'No tag found with this id'});
        return
      }
      res.json(dbTagData);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    });
    

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/seed', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new tag

router.put('/:tag:id', (req, res) => {
  Tag.update({
    tag_id: req.body.tag_id,
  },
    {
      where: {
        tag_id: req.params.tag_id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


// update a tag's name by its `id` value

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }

  })
    .then(dbTagData => {
    if (!dgTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dgTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  });

// delete on tag by its `id` value


module.exports = router;
