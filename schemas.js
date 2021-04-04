const Joi = require('joi');
const { number } = require('joi');

module.exports.historySchema = Joi.object({
    history: Joi.object({
        month: Joi.number().required().min(0),
        day: Joi.number().required().min(0),
        content: Joi.string().required(),
        category: Joi.string().required(),
        price: Joi.number().required().min(0)
    }).required()
});