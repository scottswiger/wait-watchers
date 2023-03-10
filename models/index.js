const User = require('./User');
const Wellness = require('./Wellness');

Wellness.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasOne(Wellness, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { Wellness, User };
