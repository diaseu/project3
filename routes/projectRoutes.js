const router = require('express').Router()
const { Issue, Reply, Project, User } = require('../models')
const passport = require('passport')

//get project by id get the info, owner, members, issues, and issues authors
router.get('/projects/:id', passport.authenticate('jwt'), (req, res) => {
  Project.findById(req.params.id)
    .populate('owner')
    .populate({
      path: 'members',
      model: 'User'
    })
    .populate({
      path: 'issues',
      model: 'Issue',
      populate: {
        path: 'author',
        model: 'User'
      }
    })
    .then(project => res.json(project))
    .catch(err => console.log(err))
})

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
    .catch(err => console.log(err))
})

module.exports = router 