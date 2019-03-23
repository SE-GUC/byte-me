const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            ID: Joi.number().min(3).max(20).required(),
            firtsname: Joi.string().min(3).max(20).required(),
            lastname: Joi.string().min(3).max(20).required(),
            email: Joi.number().min(7).max(30).required(),
            expiryDate: Joi.date().min(6).max(30).required(),
            dateOfBirth: Joi.date().min(1).max(3).required(),
            age: Joi.number().min(1).max(3).required(),
            skills: Joi.array().min(4).max(30),
            interests: Joi.array().min(4).max(30),
            password: Joi.number().min(8).max(30).required(),
            pastEventsAttended: Joi.array().min(4).max(30),
            contractTime: Joi.date().min(6).max(30).required(),
            contractLocation: Joi.string().min(6).max(30).required(),
            workComp: Joi.array().min(4).max(30).required(),
            reviews: Joi.array().min(4).max(30).required(),
            status: Joi.string().min(4).max(30).required()
        }

        return Joi.validate(request, createSchema)
    },

}