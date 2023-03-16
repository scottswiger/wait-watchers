const router = require('express').Router();
const { User, Wellness } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newSubmission = await Wellness.create(req.body);
      res.json(newSubmission);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   router.put('/:id', withAuth, async (req, res) => {
//     try {
//       const newSubmission = await Wellness.update(req.body, {
//         where: {
//           Wellness: req.params.id,
//         },
//       });

//       if (newSubmission > 0) {
//         res.status(200).end();
//       } else {
//         res.status(404).end();
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  router.delete('/:id', async (req, res) => {
    try {
      const deleteSubmission= User.destroy({ where: { id: req.params.id }
      });

      if (deleteSubmission) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;