const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            firstName: Joi.string().min(3).max(20).required(),
            lastName: Joi.string().min(3).max(20).required(),
            email: Joi.string().min(7).max(30).required(),
            expiryDate: Joi.string().min(6).max(30),
            dateOfBirth: Joi.string().min(1).max(20).required(),
            age: Joi.number().min(1).max(3),
            skills: Joi.array().items(Joi.string()).min(4).max(30),
            interests: Joi.array().items(Joi.string()).min(4).max(30),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            pastEventsAttended: Joi.array().items(Joi.object()).min(4).max(30),
            contractTime: Joi.string().min(6).max(30),
            contractLocation: Joi.string().min(6).max(30),
            workCompleted: Joi.array().items(Joi.string()).min(4).max(30),
            reviews: Joi.array().items(Joi.string()).min(4).max(30),
            status: Joi.string().min(4).max(30)
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            firstName: Joi.string().min(3).max(20),
            lastName: Joi.string().min(3).max(20),
            email: Joi.number().min(7).max(30),
            dateOfBirth: Joi.string().min(1).max(3),
            age: Joi.number().min(1).max(3),
            skills: Joi.array().items(Joi.string()).min(4).max(30),
            interests: Joi.array().items(Joi.string()).min(4).max(30),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
            pastEventsAttended: Joi.array().items(Joi.object()).min(4).max(30),
            workCompleted: Joi.array().items(Joi.string()).min(4).max(30),
            reviews: Joi.array().items(Joi.string()).min(4).max(30)
        }

        return Joi.validate(request, updateSchema)
    }, 
}