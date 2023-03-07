const sequelize = require('../config/connection');
const weight = require('../models/weight');
const weightData = require('./weight-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await weight.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
