const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            organizationName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,20}$/).required(),
            description: Joi.string(),
            partners: Joi.string(),
            boardMembers: Joi.string(),
            fieldOfWork: Joi.string(),
            
            
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