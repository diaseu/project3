const { model, Schema } = require('mongoose')

//see author, see replies
const Issue = new Schema({
  title: String,
  body: String,
  isPublic: Boolean,
  status: String,
  priority: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  replies: [{
    type: Schema.Types.ObjectId,
    ref: 'Reply'
  }]
})

module.exports = model('Issue', Issue)