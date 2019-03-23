const Joi = require('joi')

module.exports = {
    memberValidation: request => {
        const memberSchema = {
            firstName: Joi.string().min(3).max(20).required(),
            lastName: Joi.string().min(3).max(20).required(),
            email: Joi.string().email().required(),
            dateOfBirth: Joi.string().required(),
            skills: Joi.array().items(Joi.string()),
            interests: Joi.array().items(Joi.string()), 
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            workCompleted: Joi.array().items(Joi.string())
        }

        return Joi.validate(request, memberSchema)
    },
    partnerValidation: request => {
        const partnerSchema = {
            organizationName: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            description: Joi.string(),
            partners: Joi.array().items(Joi.string()).required(),
            boardMembers: Joi.array().items(Joi.string()).required(),
            fieldOfWork: Joi.string().required()
        }

        return Joi.validate(request, partnerSchema)
    },
    coworkingValidation: request => {
        const coworkingSchema = {
            name: Joi.string().min(3).max(20).required(),
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            rooms: Joi.array().items(Joi.string().required(),Joi.array().items(Joi.string())).required(),
            facilities: Joi.array().items(Joi.string()).required(),
            businessPlan: Joi.string().required()
        }

        return Joi.validate(request, coworkingSchema)
    },

}