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

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/seed', (req, res) => {
  tag.create([
    {
    tag_name: 'country music',
    }
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

  // create a new tag

router.put('/:tag:id', (req, res) => {
  tag.update({
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

router.delete('/:Tag_id', (req, res) => {
  Tag.destroy({
    where: {
      Tag_id: req.params.tag_id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

  // delete on tag by its `id` value


module.exports = router;
