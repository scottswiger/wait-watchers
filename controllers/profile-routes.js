const router = require('express').Router();
const Wellness = require("../models/Wellness");
const User = require('../models/User');
const withAuth = require('../utils/auth');

// View all users
router.get('/users', async (req,res) => {
  try {
    const data = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });
    const users = data.map(user => user.get({ plain: true }));
    res.render('users', {users});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets your profile & wellness stats if you are logged in.
router.get('/', withAuth, async (req, res) => {
  try {
    const data = await Wellness.findAll({ where: { user_id: req.session.user_id }});
    if (data) {
      // res.status(404).json({ message: "No data found" });
      // return;
    }

    const stats = data.map(wellness => wellness.get({ plain: true }));
    res.render('profile', {
      stats,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
});




// View another user's profile -- Not functional atm
// router.get('/profile/:id', async (req, res) => {
//     try {
//       const data = await Wellness.findByPk(req.params.id);
//       if (!data) {
//         res.status(404).json({ message: 'User not found' });
//         return;
//       }
//       const stats = data.get({ plain: true });
//       res.render('profile', stats);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router;

