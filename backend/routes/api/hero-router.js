const express = require('express');
const router = express.Router();
const { User, Hero } = require('../../db/models');
const { requireAuth } = require('../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');

const validateHero = [
    check("name"),
    check(des)
];

module.exports = router;