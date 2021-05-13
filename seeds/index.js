const seedUsers = require('./usersData.js');
const seedAgents = require('./agentsData.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedAgents();
  console.log('\n----- AGENTS SEEDED -----\n');

  process.exit(0);
}

seedAll();