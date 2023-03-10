const Wellness = require('../models/Wellness');

const data = [
    {
        id: 1,
        caloriesPerDay: 2000,
        minutesExercised: 30,
        ouncesOfWater: 64,
    },
    {
        id: 2,
        caloriesPerDay: 2000,
        minutesExercised: 30,
        ouncesOfWater: 64,
    },
];

const seedWellness = async () => await Wellness.bulkCreate(data);

module.exports = seedWellness;