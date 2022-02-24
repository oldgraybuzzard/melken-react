const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormatter');

const newsArticleSchema = new Schema(
  {
    newsTitle: {
      type: String,
      required: "You haven't entered a title!",
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

const NewsArticle =  model('NewsArticle', newsArticleSchema);

module.exports = NewsArticle;