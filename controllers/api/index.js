const router = require('express').Router();
const reportRoutes = require('./report-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes.js');
const { route } = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/reports', reportRoutes);
router.use('/comments', commentRoutes);




module.exports = router;

