const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormatter');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    newsArticles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'News',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//set up middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
