const router = require('express').Router()
const { Issue, Reply, Project, User } = require('../models')
const passport = require('passport')

//get issue by id
router.get('/issues/:id', passport.authenticate('jwt'), (req, res) => {
  Issue.findById(req.params.id, {new: true})
    .populate('author')
    .populate({
      path: 'replies',
      model: 'Reply',
      populate: {
        path: 'author',
        model: 'User'
      }
    })
    .then(issue => res.json(issue))
    .catch(err => console.log(err))
})

//create new issue (needs project id)
router.post('/issues', passport.authenticate('jwt'), (req, res) => {
  Issue.create({
    title: req.body.title,
    body: req.body.body,
    isPublic: req.body.isPublic,
    status: req.body.status,
    priority: req.body.priority,
    //expected pid here (req.body.pid)
    author: req.user._id
  })
    .then(issue => {
      Project.findByIdAndUpdate(req.body.pid, { $push: { issues: issue._id } })
        .then(data => {
          console.log('data.members', data.members)
          let members = data.members
          for (const member of members) {
            User.findByIdAndUpdate(member, { $push: { issues: issue._id } })
              .then(() => console.log('Issue added to each member of the project!'))
              .catch(err => console.log(err))
          }
        })
        .catch(err => console.log(err))
    })


    // original code to add only issues made by me to user's issues
      // User.findByIdAndUpdate(req.user._id, { $push: { issues: issue._id } })
      //   .then(() => {
      //     Project.findByIdAndUpdate(req.body.pid, { $push: { issues: issue._id } })
      //       .then(() => res.sendStatus(200))
      //       .catch(err => console.log(err))
      //   })
      //   .catch(err => console.log(err))
    // })
    .catch(err => console.log(err))
})


// Issue.create -> Project.findByIDAndUpdate to add issue to the project -> Project.findById( get members -> for each member User.findByIdAndUpdate (req.user._id, { $push: { issues: issue._id } }))

//update issue
router.put(`/issues/:id`, passport.authenticate('jwt'), (req, res) => {
  Issue.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(project => res.json(project))
    .catch(err => console.log(err))
})


module.exports = router