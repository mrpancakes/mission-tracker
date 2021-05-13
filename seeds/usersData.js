const { User } = require('../models');
const userData =

[
    {
        "user_name": "memily",
        "email": "emily@email.com",
        "password": "password",
        "agency_name": "Army"
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;