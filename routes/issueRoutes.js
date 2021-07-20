const router = require('express').Router()
const { Issue, Reply, Project, User } = require('../models')
const passport = require('passport')

// //get issue by id
// router.get('/issues/:id', passport.authenticate('jwt'), (req, res) => {
//   Issue.findById(req.params.id)
//     .populate('author')
//     .then(issue => res.json(issue))
//     .catch(err => console.log(err))
// })

//create new issue needs a pid passed in to update projects issues
router.post('/issues', passport.authenticate('jwt'), (req, res) => {
  Issue.create({
    title: req.body.title,
    body: req.body.body,
    isPublic: req.body.isPublic,
    status: req.body.status,
    priority: req.body.priority,
    //expected pid here
    author: req.user._id
  })
    .then(issue => {
      User.findByIdAndUpdate(req.user._id, { $push: { issues: issue._id } })
        .then(() => {
          Project.findByIdAndUpdate(req.body.pid, { $push: { issues: issue._id } })
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


module.exports = router