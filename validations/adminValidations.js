const Joi = require('joi')

module.exports = {
    updateValidation: request => {
        const updateSchema = {
            firstName: Joi.string().min(3).max(50).required(),
            email:Joi.string().email.required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            lastName: Joi.array().items(Joi.string()).required(),
        }
        return Joi.validate(request, updateSchema)
    }, 
}