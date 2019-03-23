const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(50).required(),
            email:Joi.string().email.required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            location: Joi.string().required(),
            joinDate: Joi.string().required(),
            openingHours: Joi.string().required(),
            equipments: Joi.array().items(Joi.string()),
            classicBasics: Joi.array().items(Joi.string()), 
            seating: Joi.array().items(Joi.string()),
            tour: Joi.boolean().required(),
            facilities: Joi.array().items(Joi.string()),
            rooms: Joi.array().items(Joi.string()).required(),
            plans: Joi.array().items(Joi.string()),
            availability: Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
             name: Joi.string().min(3).max(50).required(),
            email:Joi.string().email.required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            location: Joi.string().required(),
            joinDate: Joi.string().required(),
            openingHours: Joi.string().required(),
            equipments: Joi.array().items(Joi.string()),
            classicBasics: Joi.array().items(Joi.string()), 
            seating: Joi.array().items(Joi.string()),
            tour: Joi.boolean().required(),
            facilities: Joi.array().items(Joi.string()),
            rooms: Joi.array().items(Joi.string()).required(),
            plans: Joi.array().items(Joi.string()),
            availability: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}