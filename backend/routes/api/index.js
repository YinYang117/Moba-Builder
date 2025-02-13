const router = require('express').Router();

// Add a XSRF-TOKEN cookie return in json
router.get("/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});

const express = require('express');
const heroRouter = require('./api/hero');

router.use('/api', apiRouter)

module.exports = router;