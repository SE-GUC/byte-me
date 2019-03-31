const Joi = require('joi')

module.exports = {
    coworkingCreateValidation: request => {
        const coworkingCreateSchema = {
            name: Joi.string().min(5).max(20).required(),
            location: Joi.string().required(),
            email:Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,20}$/).min(8).max(20).required(),
            facilities: Joi.array().items(Joi.string()).min(1).required(),
            businessPlan:Joi.string().min(8).required()
        }
        return Joi.validate(request, coworkingCreateSchema)
    },
    coworkingUpdateValidation: request => {
        const coworkingUpdateSchema = {
            
            name: Joi.string().min(5).max(20),
            location: Joi.string(),
            email:Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,20}$/).min(8).max(20),
            facilities: Joi.array().items(Joi.string()).min(1),
            businessPlan:Joi.string().min(8)
        }
        return Joi.validate(request, coworkingUpdateSchema)
    },
    roomCreateValidation: request => {
        const roomCreateSchema = {
            roomNo: Joi.number().min(1).required(),
            capacity: Joi.number().not([0,null]).required(),
            rate: Joi.number().not([0,null]).required()
        }
        return Joi.validate(request, roomCreateSchema)
    },
    roomUpdateValidation: request => {
        const roomUpdateSchema = {
            roomNo: Joi.number().min(1),
            capacity: Joi.number().not([0,null]),
            rate: Joi.number().not([0,null]) 
        }
        return Joi.validate(request, roomUpdateSchema)
    }
}