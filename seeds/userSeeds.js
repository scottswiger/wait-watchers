const User = require('../models/User');

const data = [
    {
        
        username: 'Nop1337',
        email: 'Nop1337@gmail.com',
        password: 'water111',
    },
    {
        
        username: 'Nop1338',
        email: 'Nop1338@gmail.com',
        password: 'water111',
    },
];

const seedUsers = () => User.bulkCreate(data);

module.exports = seedUsers;