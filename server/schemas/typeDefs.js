const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type NewsArticle {
    _id: ID
    newsTitle: String
    newsText: String
    user: [User]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    role: String
    newsArticleId: [NewsArticle]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    user(_id: ID!): User
    userMe: User
    newsArticle(_id: ID!): NewsArticle
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, role: String!): Auth
    userLogin(email: String!, password: String!): Auth
    addNewsArticle(newsTitle: String!, newsText: String!, user: ID!): NewsArticle
    updateUser(firstName: String!, lastName: String!, role: String!, password: String!): User
    updateNewsArticle(_id: ID!, newsTitle: String!, newsText: String!, user: [ID]): NewsArticle

    removeUser(_id: ID!): User
    removeNewsArticle(_id: ID!): NewsArticle
  }

`;

module.exports = typeDefs;