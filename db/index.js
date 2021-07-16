module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/zap_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
