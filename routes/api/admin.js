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

// getting a single admin 
router.get('/:id', async(req,res) =>{
    try{
        const id = req.param.id
        const admin = await Admin.findById(id)
        if(!admin) return res.status(404).send({error: 'Admin searched for does not exist'})
        res.json(admin)
    }
    catch(error){
        console.log(error)
    }
})


//Updating an admin 
router.put('/update/:id', async (req,res) => {
    Admin.findByIdAndUpdate(req.params.id,req.body,{new : true}, (err,e)=>{
    if(err){
    return res.json({ error: `cannot upddate an admin` })
    }else{
    return res.json({data:e})
    }
    })
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