const User = require('../models/User');

const data = [
    {
        id: 1,
        username: 'Nop1337',
        email: 'Nop1337@gmail.com',
        password: 'water11',
    },
    {
        id: 2,
        username: 'Nop1338',
        email: 'Nop1338@gmail.com',
        password: 'water11',
    },
];

const seedWellness = () => User.bulkCreate(data);

module.exports = seedWellness;