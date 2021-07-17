const router = require('express').Router()
const { Issue, Reply, Project, User } = require('../models')
const passport = require('passport')


module.exports = router