const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormatter');

const newsSchema = new Schema(
  {
    newsTitle: {
      type: String,
      required: "You havn't entered a title!",
      minlength: 1,
      maxlength: 120,
    },
    newsText: {
      type: String,
      required: "You have entered any news to share!",
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp),
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref:  'User',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const News =  model('News', newsSchema);

module.exports = News;