const router = require('express').Router();
const reportRoutes = require('./report-routes');
const userRoutes = require('./user-routes.js');
const { route } = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/reports', reportRoutes);


module.exports = router;

