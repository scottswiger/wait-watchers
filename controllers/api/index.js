const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/profile', postRoutes);


// Homepage route
router.use((req, res) => {
    res.render('login');
  });

module.exports = router;
