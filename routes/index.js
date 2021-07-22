const router = require('express').Router()
const Project = require('../models/Project');

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./projectRoutes.js'))
router.use('/api', require('./issueRoutes.js'))
router.get('/api/:projectId', (req, res) => {
  const projectId =  req.params.projectId
  Project.findById(projectId)
  .then(doc => {
    if(doc) res.status(200).json(doc);
    else res.status(404).json({message: "404 Project not found!"})
  })
  .catch(err => res.status(500).json({message: err.message}))
})
router.use('/api', require('./replyRoutes.js'))

module.exports = router
