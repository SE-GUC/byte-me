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
            fieldOfWork: Joi.string().min(10).max(30).required(),
            
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            organizationName: Joi.string().min(3).max(100),
            email: Joi.string().min(3).max(100),
            password: Joi.string().min(10).max(30),
            description: Joi.string(),
            partners: Joi.array().min(1),
            boardMembers: Joi.array().min(1),
            fieldOfWork: Joi.string().min(10).max(30),
            expiryDate: Joi.date().min(6).max(30),
            contractTime: Joi.string().min(10).max(30),
            contractLocation: Joi.string().min(10).max(30)
            
           
        }

        return Joi.validate(request, updateSchema)
    }, 
}