const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            ownedBy: Joi.string().min(3).max(100).required(),
            description: Joi.string().min(1).max(3000).required(),
            duration: Joi.string().min(1).max(200).required(),
            location: Joi.string().min(1).max(200).required(),
            monthlyWage: Joi.string().min(1).max(200).required(),
            startDate: Joi.date(),
            dailyHours: Joi.number(),
            endDate: Joi.date(),
            requiredSkills: Joi.array().items(Joi.string()).min(1).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            ownedBy: Joi.string().min(3).max(100),
            description: Joi.string().min(1).max(3000),
            duration: Joi.string().min(1).max(200),
            location: Joi.string().min(1).max(200),
            monthlyWage: Joi.string().min(1).max(200),
            startDate: Joi.date(),
            dailyHours: Joi.number(),
            endDate: Joi.date(),
            requiredSkills: Joi.array().items(Joi.string()).min(1)
        }

        return Joi.validate(request, updateSchema)
    }, 
}