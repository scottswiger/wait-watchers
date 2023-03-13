const router = require('express').Router();
const apiRoutes = require('./api');
const profileRoutes = require('./profile-routes');
// const homeRoutes = require('./homeRoutes');
router.use('/api', apiRoutes);
router.use('/', profileRoutes);

// Homepage route
router.use((req, res) => {
    res.render('layouts/main');
  });

module.exports = router;
