const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            id: Joi.number().min(3).max(50).required(),
            ownedBy: Joi.string().min(3).max(100).required(),
            description: Joi.string().min(50).max(3000).required(),
            duration: Joi.string().min(20).max(200).required(),
            location: Joi.string().min(20).max(200).required(),
            monthlyWage: Joi.string().min(20).max(200).required(),
            startDate: Joi.date(),
            dailyHours: Joi.array().number(),
            endDate: Joi.date()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            id: Joi.number().min(3).max(50).required(),
            ownedBy: Joi.string().min(3).max(100).required(),
            description: Joi.string().min(50).max(3000).required(),
            duration: Joi.string().min(20).max(200).required(),
            location: Joi.string().min(20).max(200).required(),
            monthlyWage: Joi.string().min(20).max(200).required(),
            startDate: Joi.date(),
            dailyHours: Joi.array().number(),
            endDate: Joi.date()
        }

        return Joi.validate(request, updateSchema)
    }, 
}