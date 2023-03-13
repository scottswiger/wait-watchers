const User = require('./User');
const Wellness = require('./Wellness');



Wellness.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Wellness, {
    foreignKey: 'user_id'
});

module.exports = { User, Wellness};