const router = require('express').Router()
const { Issue, Reply, Project, User } = require('../models')
const passport = require('passport')

//get all projects
router.get('/projects', passport.authenticate('jwt'), (req, res) => {
  Project.find({})
    .populate('owner')
    .populate({
      path: 'members',
      model: 'User'
    })
    .populate({
      path: 'issues',
      model: 'Issue',
      populate: [
        {
          path: 'author',
          model: 'User'
        },
        {
          path: 'replies',
          model: 'Reply',
          populate: {
            path: 'author',
            model: 'User'
          }
        }
      ]
    })
    .then(project => res.json(project))
    .catch(err => console.log(err))
})

//get project by id
router.get(`/projects/:id`, passport.authenticate('jwt'), (req, res) => {
  Project.findById(req.params.id)
    .populate('owner')
    .populate({
      path: 'members',
      model: 'User'
    })
    .populate({
      path: 'issues',
      model: 'Issue',
      populate: [
        {
          path: 'author',
          model: 'User'
        },
        {
          path: 'replies',
          model: 'Reply',
          populate: {
            path: 'author',
            model: 'User'
          }
        }
      ]
    })
    .then(project => res.json(project))
    .catch(err => console.log(err))
})

//create new project
router.post('/projects', passport.authenticate('jwt'), (req, res) => {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    owner: req.user._id
  })
    .then(project => {
      User.findByIdAndUpdate(req.user._id, { $push: { projects: project._id } })
        .then(() => {
          Project.findByIdAndUpdate(project._id, { $push: { members: project.owner._id } })
            .then(() => res.json(project._id))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

//update project
router.put(`/projects/:id`, passport.authenticate('jwt'), (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(project => res.json(project))
    .catch(err => console.log(err))
})


module.exports = router