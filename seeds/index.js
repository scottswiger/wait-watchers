const seedWellness = require('./wellnessSeeds');
const seedUsers = require('./userSeeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWellness();
  console.log('\n----- STATS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n')
  process.exit(0);
};

seedAll();
