const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(50).required(),
            email:Joi.string().email.required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            facilities: Joi.array().items(Joi.string()).required(),
            rooms: Joi.array().items(Joi.string()).required(),
            businessPlan:Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(50).required(),
            email:Joi.string().email.required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            facilities: Joi.array().items(Joi.string()).required(),
            rooms: Joi.array().items(Joi.string()).required(),
            businessPlan:Joi.string().required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}