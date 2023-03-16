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


// All routes --
// http://localhost:3001/login = login page
// http://localhost:3001/profile = user's profile page
// http://localhost:3001/profile/users = View all users page
// http://localhost:3001/api/post = Post to create new Wellness
// http://localhost:3001/api/post/:id = User destroy route
// http://localhost:3001/api/users/logout = Post to logout destroy session 
