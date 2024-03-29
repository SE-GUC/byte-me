const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            type: Joi.string().min(3).max(500).required(),
            eventName: Joi.string().min(3).max(500).required(),
            eventDescription: Joi.string().min(3).max(500).required(),
            eventLocation: Joi.string().min(3).max(500).required(),
            eventDuration: Joi.string().min(3).max(500).required(),
            eventDate: Joi.date().required(),
            organizedBy: Joi.string().min(3).max(500)
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            type: Joi.string().min(3).max(500),
            eventName: Joi.string().min(3).max(500),
            eventDescription: Joi.string().min(3).max(500),
            eventLocation: Joi.string().min(3).max(500),
            eventDuration: Joi.string().min(3).max(500),
            eventDate: Joi.date(),
            organizedBy: Joi.string().min(3).max(500)
        
        }

        return Joi.validate(request, updateSchema)
    }, 
}