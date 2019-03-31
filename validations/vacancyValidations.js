const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            
            description: Joi.string().min(1).max(3000).required(),
            duration: Joi.string().min(1).max(200).required(),
            location: Joi.string().min(1).max(200).required(),
            monthlyWage: Joi.number().required(),
            startDate: Joi.date().required(),
            dailyHours: Joi.number().required(),
            endDate: Joi.date().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            
            description: Joi.string().min(1).max(3000),
            duration: Joi.string().min(1).max(200),
            location: Joi.string().min(1).max(200),
            monthlyWage: Joi.number(),
            startDate: Joi.date(),
            dailyHours: Joi.number(),
            endDate: Joi.date()
        }

        return Joi.validate(request, updateSchema)
    }, 
}