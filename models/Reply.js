const { model, Schema} = require('mongoose')

//just see the author of the reply
const Reply = new Schema({
  text: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Reply', Reply)