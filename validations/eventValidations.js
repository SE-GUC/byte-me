<<<<<<< HEAD:validations/eventValidations.js
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
            organizedBy: Joi.string().min(3).max(500).required(),
            numberOfPages: Joi.number().min(50).max(3000).required(),
            releaseYear: Joi.string()
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
            eventDate: Joi.date,
            attendees:Joi.array.items(Joi.string().min(3).max(500)),
            organizedBy: Joi.string().min(3).max(500),
            numberOfPages: Joi.number().min(50).max(3000),
            releaseYear: Joi.string()
        
        }

        return Joi.validate(request, updateSchema)
    }, 
=======
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

    updateValidation: request => {
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
>>>>>>> Sprint2Kelyan:eventValidations.js
}