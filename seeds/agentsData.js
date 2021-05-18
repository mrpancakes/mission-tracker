const { Agents } = require('../models');
const agentsData =

[
    {
        "first": "Emily",
        "last": "Memily",
        "gender": "Female",
        "code_name": "Cobra",
        "status": "Active",
        "location": "texas",
        "specialties": "negotiation",
        "user_id": 1
    },

    {
        "first": "Jack",
        "last": "Frost",
        "gender": "Male",
        "code_name": "Diablo",
        "status": "Active",
        "location": "Tokyo",
        "specialties": "Sharp shooter, light on their feet.",
        "user_id": 2
    },

    {
        "first": "Sarah",
        "last": "Smith",
        "gender": "Female",
        "code_name": "22",
        "status": "Inactive",
        "location": "Moscow",
        "specialties": "Muy thai, backflips, smooth talker.",
        "user_id": 2
    },

    {
        "first": "Jill",
        "last": "Johnson",
        "gender": "Female",
        "code_name": "Noir",
        "status": "Active",
        "location": "Vancouver",
        "specialties": "Stealth, speed.",
        "user_id": 2
    },

    {
        "first": "Sam",
        "last": "Banning",
        "gender": "Male",
        "code_name": "Joker",
        "status": "Active",
        "location": "Madrid",
        "specialties": "Can talk his way out of any scenario, collegiate wrestling champion.",
        "user_id": 2
    },

    {
        "first": "Cody",
        "last": "Morales",
        "gender": "Male",
        "code_name": "Tango",
        "status": "Inactive",
        "location": "Beijing",
        "specialties": "Contortionist, computer wiz.",
        "user_id": 2
    },

    {
        "first": "Mariana",
        "last": "Fuller",
        "gender": "Female",
        "code_name": "Ace",
        "status": "Active",
        "location": "Bangkok",
        "specialties": "Wicked with a crossbow",
        "user_id": 2
    },

    {
        "first": "Denzel",
        "last": "Rose",
        "gender": "Male",
        "code_name": "Rocket",
        "status": "Active",
        "location": "New York City",
        "specialties": "Genius IQ, can read people instantly, stronger than he looks.",
        "user_id": 2
    },

    {
        "first": "Kim",
        "last": "Von Holstein",
        "gender": "Female",
        "code_name": "Cobra",
        "status": "Inactive",
        "location": "Mexico City",
        "specialties": "Black belt in just about martial art,",
        "user_id": 2
    },


]

const seedAgents = () => Agents.bulkCreate(agentsData);
module.exports = seedAgents;