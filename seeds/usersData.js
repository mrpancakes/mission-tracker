const { User } = require('../models');
const userData =

[
    {
        "user_name": "memily",
        "email": "emily@email.com",
        "password": "password",
        "agency_name": "Army"
    },

    {
        "user_name": "Renegade",
        "email": "test@email.com",
        "password": "password",
        "agency_name": "B.O.S.S."
    },


]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;