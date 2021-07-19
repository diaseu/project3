const router = require('express').Router()
const { Issue, Reply, Project, User } = require('../models')
const passport = require('passport')

//create new project route
router.post('/projects', passport.authenticate('jwt'), (req, res) => {
  Project.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(project => {
      User.findByIdAndUpdate(req.user.id, { $push: { posts: project._id } })
        .then(() => {
          res.json({
            id: project._id,
            title: project.title,
            description: project.description,
            owner: req.user,
            members: [],
            issues: []
          })
        })
    })
})

module.exports = router 