const router = require('express').Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// get all users (figure out later another method for scalability)
router.get('/users/all', (req, res) => {
  console.log('backend')
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//reg user
router.post('/users/register', (req, res) => {
  const { name, email, username } = req.body
  User.register(new User({ name, email, username }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

//login auth
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
  })
})

//get curr user
router.get('/users/me', passport.authenticate('jwt'), (req, res) => {
  res.json(req.user)
})

router.get('/users/:username', passport.authenticate('jwt'), (req, res) => {
  User.findOne({ username: req.params.username })
    .populate({
      path: 'projects',
      model: 'Project',
      populate: {
        path: 'issues',
        model: 'Issue',
        populate: {
          path: 'author',
          model: 'User'
        }
      }
    })
    .then(user => res.json(user))
    .catch(err => console.log(err))
})

module.exports = router
