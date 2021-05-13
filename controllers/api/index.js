//taking everything from agents, home and user routes
//consolidating all those requests and exporting it there
//creating updating and deleting adding
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const agentsRoutes = require('./agentsRoutes');

router.use('/user', userRoutes);
router.use('/agents', agentsRoutes);

module.exports = router;