const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            
            description: Joi.string().min(1).max(3000).required(),
            duration: Joi.string().min(1).max(200).required(),
            location: Joi.string().min(1).max(200).required(),
            monthlyWage: Joi.number().min(1).max(2000000000000).required(),
            startDate: Joi.date().required(),
            dailyHours: Joi.number().required(),
            endDate: Joi.date().required(),
            skillrequired:Joi.string().min(1).max(200)
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            
            description: Joi.string().min(1).max(3000),
            duration: Joi.string().min(1).max(200),
            location: Joi.string().min(1).max(200),
            monthlyWage: Joi.number().min(1).max(2000000000000),
            startDate: Joi.date(),
            dailyHours: Joi.number(),
            endDate: Joi.date(),
            skillrequired:Joi.string().min(1).max(200)
        }

        return Joi.validate(request, updateSchema)
    }, 
}