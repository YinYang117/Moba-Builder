const router = require('express').Router();
// const sessionRouter = require('./session.js');
const usersRouter = require('./user-router');
const heroRouter = require('./hero-router');
const { restoreUser, requireAuth } = require('../utils/auth');


// If valid user in session:
    // sets req.user to safeUser version of user from db
// Else sets req.user to null
router.use(restoreUser);

// router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/heroes', heroRouter)

module.exports = router;