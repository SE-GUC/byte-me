const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            organizationName: Joi.string().min(3).max(100).required(),
            email: Joi.string().min(3).max(100).required(),
            password: Joi.string().min(10).max(30).required(),
            description: Joi.string(),
            partners: Joi.array().min(1).required(),
            boardMembers: Joi.array().min(1).required(),
            eventID: Joi.array().number(),
            fieldOfWork: Joi.string().min(10).max(30).required(),
            vacancyID: Joi.array().number(),
            status: Joi.string().min(10).max(30).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            organizationName: Joi.string().min(3).max(100).required(),
            email: Joi.string().min(3).max(100).required(),
            password: Joi.string().min(10).max(30).required(),
            description: Joi.string(),
            partners: Joi.array().min(1).required(),
            boardMembers: Joi.array().min(1).required(),
            eventID: Joi.array().number(),
            fieldOfWork: Joi.string().min(10).max(30).required(),
            vacancyID: Joi.array().number(),
            status: Joi.string().min(10).max(30).required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}