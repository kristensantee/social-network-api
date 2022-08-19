const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
    // getRandomUser,
    // getRandomThoughts,
    users,
    thoughts
} = require('./data');

// console.time('seeding');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    // const users = [...getRandomUser()];
    // const thoughts = [...getRandomThoughts()];
    await User.collection.insertMany(users);

    console.table(users);
    console.table(thoughts);
    // console.timeEnd('Seeding complete 🌱!');
    process.exit(0);
})