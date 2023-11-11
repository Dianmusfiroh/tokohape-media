const router = require('express').Router();
const userRoute = require('../route/user.route');
router.use('/api/v1', userRoute);

module.exports = router