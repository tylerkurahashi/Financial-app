const mongoose = require('mongoose');
// const Review = require('./review')
const Schema = mongoose.Schema;

const SumSchema = new Schema({
    month: Number,
    income: Number,
    food: Number,
    lifestyle: String,
    daily: String,
    others: Number,
    savings: Number
});

// HistorySchema.post('findOneAndDelete', async function (doc) {
//     if (doc) {
//         await Review.deleteMany({
//             _id: {
//                 $in: doc.reviews
//             }
//         })
//     }
// })

module.exports = mongoose.model('Sum', SumSchema, 'sum');