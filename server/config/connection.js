const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/melkenNewsFeed',
  {
    useNewUrlParser: true,
  }
);

module.exports = mongoose.connection;