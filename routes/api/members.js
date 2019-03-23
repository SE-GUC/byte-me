const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Member = require('../../models/Member')

//const validator = require('../../validations/bookValidations')
const eventValidator = require('../../validations/eventValidations')

router.get('/', async (req,res) => {
    const members = await Member.find()
    res.json({data: members})
})

// Create a Member
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newMember = await Member.create(req.body)
    res.json({msg:'Member was created successfully', data: newMember})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a Member
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const member = await Member.findOne({id})
     if(!member) return res.status(404).send({error: 'Member does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedMember = await Member.updateOne(req.body)
     res.json({msg: 'Member updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedMember = await Member.findByIdAndRemove(id)
     res.json({msg:'Member was deleted successfully', data: deletedMember})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.post('/createEvent', async (req,res) =>{//create an event
    try{
        const isValidated = eventValidator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newEvent = await Event.create(req.body)
        res.json({msg:'Event was created successfully', data: newEvent})
    }
    catch(error){
        console.log(error)
    }
 })

 router.get('/viewEvent/:id', async (req,res) =>{
    try{
        const eventID = req.params.id
        const event = Event.findOne({eventID})
        if(!event) return res.status(404).send({error: 'An event with that ID does not exist'})
        res.json({data:event})
    }
    catch(error){
        console.log(error)
    }
 })

 

module.exports = router