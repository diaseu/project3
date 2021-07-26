const { model, Schema} = require('mongoose')

//just see the author of the reply
const Reply = new Schema({
  body: {
    type: Object,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
  {
    timestamps: true
  }
)

module.exports = model('Reply', Reply)