const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            type: Joi.string().min(3).max(500).required(),
            eventName: Joi.string().min(3).max(500).required(),
            eventDescription: Joi.string().min(3).max(500).required(),
            eventLocation: Joi.string().min(3).max(500).required(),
            eventDuration: Joi.string().min(3).max(500).required(),
            eventDate: Joi.date.required(),
            attendees:Joi.array.string().min(3).max(500).required(),
            organizedBy: Joi.string().min(3).max(500).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => { //removed all .required from attributes because it's not necessary to update everything when we want to update sth
        const updateSchema = {
            type: Joi.string().min(3).max(500),
            eventName: Joi.string().min(3).max(500),
            eventDescription: Joi.string().min(3).max(500),
            eventLocation: Joi.string().min(3).max(500),
            eventDuration: Joi.string().min(3).max(500),
            eventDate: Joi.date,
            attendees:Joi.array.string().min(3).max(500),
            organizedBy: Joi.string().min(3).max(500)
        
        }

        return Joi.validate(request, updateSchema)
    }, 
}