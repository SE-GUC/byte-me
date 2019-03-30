const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Partner = require('../../models/Partner')
const validator = require('../../validations/partnerValidations')

//login 
router.post('/register', async (req,res) => {
    const { email, password }  = req.body
    const partner = await Partner.findOne({email})
    if(partner) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newPartner = new Partner({
            
            password: hashedPassword ,
            email
            
        })
    newPartner
    .save()
    .then(partner => res.json({data: partner}))
    .catch(err => res.json({error: 'Can not create partner'}))
})

//As a partner i should get my profile information 
router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})
//create profile
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newProfile = await Partner.create(req.body)
     res.json({msg:'partner was created successfully', data: newProfile})
    }
    catch(error) {
        
        console.log(error)
    }  
 })
 //update profile
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const partner = await Partner.findOne({id})
     if(!partner) return res.status(404).send({error: 'partner does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedPartner = await Partner.updateOne(req.body)
     res.json({msg: 'Partner updated successfully'})
    }
    catch(error) {
        
        console.log(error)
    }  
 })
//delete profile
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedPartner = await Partner.findByIdAndRemove(id)
     res.json({msg:'Partner was deleted successfully', data: deletedPartner})
    }
    catch(error) {
        
        console.log(error)
    }  
 })
module.exports = router