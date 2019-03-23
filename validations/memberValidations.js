const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            fname: Joi.string().min(3).max(20).required(),
            lname: Joi.string().min(3).max(20).required(),
            email: Joi.number().min(7).max(30).required(),
            expiringDate: Joi.date().min(6).max(30),
            age: Joi.number().min(1).max(3).required(),
            skills: Joi.array().min(4).max(30),
            interests: Joi.array().min(4).max(30),
            password: Joi.number().min(8).max(30).required(),
            pastAttendedEvents: Joi.array().min(4).max(30),
            eventTime: Joi.date().min(6).max(30),
            eventLocation: Joi.string().min(6).max(30),
            workComp: Joi.array().min(4).max(30),
            reviews: Joi.array().min(4).max(30),
            accountStatus: Joi.string().min(4).max(30),
            certifications: Joi.string().min(4).max(30)
        }

        return Joi.validate(request, createSchema)
    },

}