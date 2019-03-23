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
 module.exports = router