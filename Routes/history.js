const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { historySchema } = require('../schemas.js');

const ExpressError = require('../utils/ExpressError');
const History = require('../models/history');

const validateHistory = (req, res, next) => {
    const { error } = historySchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

router.get('/:year-:month', catchAsync(async (req, res) => {
    const year = req.params.year
    const month = req.params.month
    const histories = await History.find({'month':month});
    console.log(histories)
    res.render('home', { month, year, histories })
}));

router.post('/:month', validateHistory, catchAsync(async (req, res) => {

}))

module.exports = router;