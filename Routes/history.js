const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { historySchema } = require('../schemas.js');

const ExpressError = require('../utils/ExpressError');
const History = require('../models/history');
const Sum = require('../models/sum')

const validateHistory = (req, res, next) => {
    const { error } = historySchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}



// wip
// render login page
router.get('/', async(req, res) => {
    res.render('home')
})




router.get('/:year-:month', catchAsync(async (req, res) => {
    const year = req.params.year
    const month = req.params.month
    const histories = await History.find({'year': year,'month': month});
    const sums = await Sum.find({'year': year,'month': month})
    console.log(histories)
    console.log(sums)
    res.render('history', { month, year, histories, sums })
}));

router.post('/:year-:month', catchAsync(async (req, res) => {
    // Setting the parameter
    const year = req.params.year
    const month = req.params.month
    const category = req.body.history.category
    const price = req.body.history.price
    req.body.history.month = month
    req.body.history.year = year

    const histories = new History(req.body.history)
    await histories.save()

    const sums = await Sum.find({year: year, month: month})

    if (sums.length == 0) {
        const newSum = new Sum({'year': year, "month": month, [category]: price});
        await newSum.save();
    } else {
        await Sum.findOneAndUpdate({year: year, month: month},{[category]: Number(sums[0][category]) + Number(price)})
    }

    res.redirect('/' + year + '-' + month)
}));

router.post('/:year-:month/income', catchAsync(async (req, res) => {
    const year = req.params.year
    const month = req.params.month
    const income = req.body.income

    const sums = await Sum.find({year: year, month: month})

    if (sums.length == 0) {
        const newSum = new Sum({'year': year, "month": month, income: income});
        await newSum.save();
    } else {
        await Sum.findOneAndUpdate({year: year, month: month},{Income: Number(income)})
    }
    res.redirect('/' + year + '-' + month)
}))

module.exports = router;