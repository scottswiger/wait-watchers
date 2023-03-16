const router = require('express').Router();
const apiRoutes = require('./api');
const profileRoutes = require('./profile-routes');
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);

// Homepage route
router.use((req, res) => {
    res.render('login');
  });

module.exports = router;
