const router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/users', require('./user/router'));
router.use('/tasks', require('./task/router'));

module.exports = router;
