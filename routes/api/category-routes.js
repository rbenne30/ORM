const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then((categorydata) => {
    res.json(categorydata);
  });
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
      category_name: req.body.category_name
  })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});
  // create a new category


router.put('/:id', (req, res) => {
  category.update({
    category_id: req.body.category_id,
  },
  {
  where: {
    category_id: req.params.category_id,
  },
}
)
.then((updatedCategory) => {
  res.json(updatedCategory);
})
.catch((err) => {
  console.log(err);
  res.json(err);
});
});
  // update a category by its `id` value


router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      Category_id: req.params.Category_id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});
  // delete a category by its `id` value


module.exports = router;
