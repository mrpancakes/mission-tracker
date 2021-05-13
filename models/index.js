const User = require('./User');
const Agents = require('./Agents');

User.hasMany(Agents, {
    foreignKey: 'user_id'
});
Agents.belongsTo(User, {
    foreignKey: 'user_id'
});
module.exports = { User, Agents };