const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Event = require('../../models/Event')
const validator = require('../../validations/eventValidations')

<<<<<<< HEAD
=======
//Get all events
router.get('/', async (req,res) => {
    const events = await Event.find()
    res.json({data: events})
})


>>>>>>> salmadev
//As a member , my profile should be updated when i create an event
//Get all vacancies
router.get('/', async (req,res) => {
    const events = await Event.find()
    res.json({data: events})
})
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const event = await Event.findOne({id})
     if(!event) return res.status(404).send({error: 'Event does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedEvent = await Event.updateOne(req.body)
     res.json({msg: 'Event updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 module.exports = router
