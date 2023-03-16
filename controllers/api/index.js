const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

// Homepage route
router.use((req, res) => {
    res.render('login');
  });

module.exports = router;
