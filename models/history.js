const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    month: Number,
    day: Number,
    content: String,
    category: String,
    price: Number,
});

HistorySchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('History', HistorySchema);