const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter)

// reset CSRF token, set the cookie, return XSRF-TOKEN cookie
router.get("/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});


module.exports = router;