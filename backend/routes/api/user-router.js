const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check } = require('express-validator')
const { handleValidationErrors } = require('../utils/validation')
const { setTokenCookie, restoreUser } = require('../utils/auth');
const { User } = require('../../db/models');
const { Op } = require('sequelize');

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Invalid email'),
    check('email')
        .isLength({ min: 5 })
        .withMessage('Email must be at least 5 characters'),
    check('email')
        .isLength({ max: 255 })
        .withMessage('Email must be 255 characters or less'),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Username is required'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email'),
    check('username')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters'),
    check('username')
        .isLength({ max: 50 })
        .withMessage('Username must be 50 characters or less'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password is required'),
    handleValidationErrors
];


// Sign-up new User
router.post('/', validateSignup, async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password);

    const isExistingUser = await User.findOne({
        where: {
            [Op.or]: [{ email: email }, { username: username }],
        },
    })

    if (isExistingUser) {
        const isEmail = email === isExistingUser.email;
        const isUsername = username === isExistingUser.username;
        const errObj = { message: 'User already exists' };

        if (isUsername) errObj.errors.username = 'User with that username already exists';
        if (isEmail) errObj.errors.email = 'User with that email already exists';
        res.json(errObj);
    }

    const newUser = await User.create({
        username, email, hashedPassword
    })

    const safeUser = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
    }

    setTokenCookie(res, safeUser)

    res.json(safeUser)
})

/*
    No functionality to delete or edit users yet.
    Getting a user will usually fall into a session request and the session router.
*/

module.exports = router;