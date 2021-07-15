const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  issues: [{
    
  }]
  
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
