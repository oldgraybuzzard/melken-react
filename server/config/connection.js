const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/${process.env.MONGODB_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopolog: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;