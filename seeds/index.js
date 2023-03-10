const seedWellness = require('./wellnessSeeds');
const seedUsers = require('./userSeeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n')
  await seedWellness();
  console.log('\n----- STATS SEEDED -----\n');
  process.exit(0);
};

seedAll();
