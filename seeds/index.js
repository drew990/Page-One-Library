const seedUsers = require('./user-seeds');
const seedReports = require('./report-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedReports();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  process.exit(0);
};

//seedAll();
