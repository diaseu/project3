const { model, Schema } = require('mongoose')

//see author, see replies
const CommunityIssue = new Schema({
  title: String,
  body: String,
  status: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'Reply'
  }],
  issue: {
    type: Schema.Types.ObjectId,
    ref: 'Issue'
  }
})

module.exports = model('CommunityIssue', CommunityIssue)