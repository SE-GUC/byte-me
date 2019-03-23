const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Vacancy = require('../../models/Vacancy')
const validator = require('../../validations/vacancyValidations')
//Get all vacancies
router.get('/', async (req,res) => {
    const vacancies = await Vacancy.find()
    res.json({data: vacancies})
})
//Create Vacancy
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newVacancy = await Vacancy.create(req.body)
     res.json({msg:'Vacancy was created successfully', data: newVacancy})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 // as a partner i should be able to update my vacancies so that i can keep my profile updated
router.put('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const vacancy = await Vacancy.findOne({id})
        if(!vacancy) return res.status(404).send({error: 'Vacancy does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedVacancy = await Vacancy.updateOne(req.body)
        res.json({msg: 'Vacancy updated successfully'})
       }
       catch(error) {
           
           console.log(error)
       }  
    })

    

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedVacancy = await Vacancy.findByIdAndRemove(id)
     res.json({msg:'Vacancy was deleted successfully', data: deletedVacancy})
    }
    catch(error) {
        
        console.log(error)
    }  
 })

 module.exports = router