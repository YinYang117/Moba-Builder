const express = require('express');
const router = express.Router();
const { User, Hero } = require('../../db/models');
const { requireAuth } = require('../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');

const validateHero = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage('Name is required'),
    check("name")
        .isLength({ max: 50 })
        .withMessage('Name must be 50 characters or less'),
    check("description")
        .isLength({ max: 1000 })
        .withMessage('Description must be 1000 characters or less'),
    check('resourceName')
        .optional({ checkFalsy: true })
        .isIn(["Energy", "Mana", "Rage", "Focus"])
        .withMessage('Invalid resource type'),
    check('resourceAmount')
        .custom((resourceAmount, { req }) => {
            if (req.body.resourceName && !resourceAmount) {
                throw new Error('Resources amount must be provided and must be truthy when resources is provided');
            }
            else return true;
        })
];

router.get('/', async (req, res, next) => {

})

router.post('/', validateHero, async (req, res, next) => {

})

router.put('/', async (req, res, next) => {
    
})

router.delete('/', async (req, res, next) => {
    
})

module.exports = router;