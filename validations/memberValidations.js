const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
           
            firstName: Joi.string().min(3).max(20).required(),
            lastName: Joi.string().min(3).max(20).required(),
            email: Joi.string().min(7).max(30).required(),
            expiryDate: Joi.date().min(6).max(30),
            dateOfBirth: Joi.string().min(1).max(3),
            age: Joi.number().min(1).max(3),
            skills: Joi.array().min(4).max(30),
            interests: Joi.array().min(4).max(30),
            password: Joi.number().min(8).max(30),
            pastEventsAttended: Joi.array().min(4).max(30),
            contractTime: Joi.date().min(6).max(30),
            contractLocation: Joi.string().min(6).max(30),
            workComp: Joi.array().min(4).max(30),
            reviews: Joi.array().min(4).max(30),
            status: Joi.string().min(4).max(30)
        }

        return Joi.validate(request, createSchema)
    },

}