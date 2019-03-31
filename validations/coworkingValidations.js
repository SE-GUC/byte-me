const Joi = require('joi')

module.exports = {
    coworkingCreateValidation: request => {
        const coworkingCreateSchema = {
            name: Joi.string().min(5).max(20).required(),
            email:Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,20}$/).min(8).max(20).required(),
            facilities: Joi.array().items(Joi.string()).min(1).required(),
            businessPlan:Joi.string().min(8).required(),
            rooms: Joi.array().items(Joi.object().keys({
                roomNo: Joi.number().required(),
                capacity: Joi.number().required(),
                rate: Joi.number().required(),
                reservation: Joi.array().items(Joi.object().keys({
                    date: Joi.string().required()
                })).min(3).required()
            })).required()
        }
        return Joi.validate(request, coworkingCreateSchema)
    },
    coworkingUpdateValidation: request => {
        const coworkingUpdateSchema = {
            name: Joi.string().min(5).max(20),
            email:Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,20}$/).min(8).max(20),
            facilities: Joi.array().items(Joi.string()).min(1),
            businessPlan:Joi.string().min(8),
        }
        return Joi.validate(request, coworkingUpdateSchema)
    },
    roomCreateValidation: request => {
        const roomCreateSchema = {
            roomNo: Joi.number().required(),
            capacity: Joi.number().required(),
            rate: Joi.number().required(),
            reservation: Joi.array().items(Joi.object().keys({
                date: Joi.string().required()
            })).min(3).required()
        }
        return Joi.validate(request, roomCreateSchema)
    },
    roomUpdateValidation: request => {
        const roomUpdateSchema = {
            roomNo: Joi.number().not([0,null]),
            capacity: Joi.number().not([0,null]),
            rate: Joi.number().not([0,null]),
        }
        return Joi.validate(request, roomUpdateSchema)
    },
    scheduleCreateValidation: request => {
        const scheduleCreateSchema = {
            date: Joi.string().required()
        }
        return Joi.validate(request, scheduleCreateSchema)
    },
    scheduleUpdateValidation: request => {
        const scheduleUpdateSchema = {
            date: Joi.string().not(null),
        }
        return Joi.validate(request, scheduleUpdateSchema)
    },
}