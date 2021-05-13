const { Agents } = require('../models');
const agentsData =

[
    {
        "first": "Emily",
        "last": "Memily",
        "gender": "female",
        "code_name": "Cobra",
        "status": "active",
        "location": "texas",
        "specialties": "negotiation",
        "user_id": 1
    }
]

const seedAgents = () => Agents.bulkCreate(agentsData);
module.exports = seedAgents;