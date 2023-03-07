const router = require('express').Router();
const path = require('path');

// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/weight/:num', async (req, res) => {
    // This method renders the 'weight' template, and uses params to select the correct weight to render in the template, based on the id of the weight.
    return res.render('weight', weight[req.params.num - 1]);
  });

module.exports = router;

