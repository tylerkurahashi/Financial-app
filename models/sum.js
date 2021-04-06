const mongoose = require('mongoose');
// const Review = require('./review')
const Schema = mongoose.Schema;

const SumSchema = new Schema({
    year: Number,
    month: Number,
    Food: {
        type: Number,
        default: 0
    },
    Lifestyle: {
        type: Number,
        default: 0
    },
    Daily: {
        type: Number,
        default: 0
    },
    Others: {
        type: Number,
        default: 0
    }
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