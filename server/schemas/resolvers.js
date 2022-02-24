const { NewsArticle, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { populate } = require('../models/User');

const resolvers = {
  Query: {
   // get logged in employer user
    userMe: async (parents, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id
        })
         .select('-__v -password')
          .populate({
            path: 'user',
            populate: {
              path: 'userId',
              model: 'User',
            },
            populate: {
              path: 'newsArticles',
              model: 'NewsArticle',
            },

          })
          .populate({
            path: 'newsArticles',
            populate: {
              path: 'newArticles',
              model: 'NewsArticle',
            },
            populate: {
              path: 'user',
              model: 'User',
            },

          });
          return userData;
      }
      throw new AuthenticationError('Not logged in');   
    }, 
  },
    Mutation: {
      // create a user
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
     //user login
    userLogin: async (parent, {email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('User not found');
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    //add newsArticle
    addNewsArticle: async (parent, args, context) => {
      if (context.user) {
        const newsArticle = await NewsArticle.create({
          ...args,
          user: context.user._id,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { newsArticles: newsArticle._id } },
          { new: true, runValidators: true }
        );
        return newsArticle;
      }
      throw new AuthenticationError('You need to be logged in!');
    },  
  },
};

module.exports = resolvers;