const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Course = mongoose.model('Course', new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [String],
    isPublished: Boolean
}));


function validateCustomer (data) {
    
    const schema = Joi.object({
        name: Joi.string().required(),
        author: Joi.string(),
        tags: Joi.array(),
        isPublished: Joi.boolean(),
    });

    return schema.validate(data);

}

exports.Course = Course;
exports.validate = validateCustomer;