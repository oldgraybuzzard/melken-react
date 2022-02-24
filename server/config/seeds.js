const db = require('./connection');
const { User, NewsArticle } = require('../models');
const { findById, findByIdAndUpdate, create } = require('../models/User');

db.once('open', async () => {
  await User.deleteMany();
  await NewsArticle.deleteMany();
  
  const user = await User.create([
    {
      firstName: 'John',
      lastName: 'Tester',
      email: 'john@test.com',
      role: 'tester',
      password: '1qqaz2wsx'
    },
  ]);
  console.log('users seeded');


  process.exit();
});