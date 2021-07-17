const { model, Schema } = require('mongoose')

//be able to access a users projects and see issues they posted
const User = new Schema({
  name: String,
  email: String,
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  issues: [{
    type: Schema.Types.ObjectId,
    ref: 'Issue'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
