const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Admin = require('../../models/Admin')
const validator = require('../../validations/adminValidations')

//getting all admins
router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
})

//updating an admin 
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Admin.findOne({id})
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin updated successfully'})
    }
    catch(error) {
        console.log(error)
    }  
 })

 // Deleting an admin profile
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        console.log(error)
    }  
 })



module.exports = router