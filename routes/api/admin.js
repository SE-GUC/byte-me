const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Member = require('../../models/Member')
const Partner = require('../../models/Partner')
const Coworking = require('../../models/Coworking')

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
// view pending members
 router.get('/viewPendingMembers', async (req,res) =>{
     try{
         const pendingMembers = []
         const Members = await Member.find()
         for(const member of Members){
             if(member.status == 'Pending'){
                 pendingMembers.push(member)
             }
         }
         res.json({data:pendingMembers})

     }
     catch(error){
         console.log(error)
     }
 })
// Accepting pending member
 router.put('/acceptPendingMember/:id', async (req,res)=>{
   try{
       const id = req.params.id
       const pendingMember = await Member.findById(id)
       if(!pendingMember){
           return res.status(404).send({error: 'There is no member with such ID'})
       }
       if(pendingMember.status == "Pending"){
           pendingMember.status = "Accepted"
           return res.json({data:pendingMember})
       }
   }
      
   catch(error){
       console.log(error)
   }
})
// reject pending member
router.put('/rejectPendingMember/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const pendingMember = await Member.findById(id)
        if(!pendingMember){
            return res.status(404).send({error: 'There is no member with such ID'})
        }
        if(pendingMember.status == "Pending"){
            pendingMember.status = "Rejected"
            return res.json({data:pendingMember})
        }
    }
       
    catch(error){
        console.log(error)
    }
 })

 // view pending partner
 router.get('/viewPendingPartners', async (req,res) =>{
    try{
        const pendingPartner = []
        const Partners = await Partner.find()
        for(const partner of Partners){
            if(partner.status == 'Pending'){
                pendingPartner.push(partner)
            }
        }
        res.json({data:pendingPartner})

    }
    catch(error){
        console.log(error)
    }
})

// Accepting pending partner
router.put('/acceptPendingPartner/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const pendingPartner = await Partner.findById(id)
        if(!pendingPartner){
            return res.status(404).send({error: 'There is no Partner with such ID'})
        }
        if(pendingPartner.status == "Pending"){
            pendingPartner.status = "Accepted"
            return res.json({data:pendingPartner})
        }
    }
       
    catch(error){
        console.log(error)
    }
 })

 // reject pending partner
router.put('/rejectPendingPartner/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const pendingPartner = await Partner.findById(id)
        if(!pendingPartner){
            return res.status(404).send({error: 'There is no partner with such ID'})
        }
        if(pendingPartner.status == "Pending"){
            pendingPartner.status = "Rejected"
            return res.json({data:pendingPartner})
        }
    }
       
    catch(error){
        console.log(error)
    }
 })

 // view pending coworking
 router.get('/viewPendingCoworkings', async (req,res) =>{
    try{
        const pendingCoworking = []
        const Coworkings = await Coworking.find()
        for(const coworking of Coworkings){
            if(coworking.status == 'Pending'){
                pendingCoworking.push(coworking)
            }
        }
        res.json({data:pendingCoworking})

    }
    catch(error){
        console.log(error)
    }
})

// Accepting pending coworking
router.put('/acceptPendingCoworking/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const pendingCoworking = await Coworking.findById(id)
        if(!pendingCoworking){
            return res.status(404).send({error: 'There is no coworking with such ID'})
        }
        if(pendingCoworking.status == "Pending"){
            pendingCoworking.status = "Accepted"
            return res.json({data:pendingCoworking})
        }
    }
       
    catch(error){
        console.log(error)
    }
 })

 // reject pending coworking
router.put('/rejectPendingCoworking/:id', async (req,res)=>{
    try{
        const id = req.params.id
        const pendingCoworking = await Coworking.findById(id)
        if(!pendingCoworking){
            return res.status(404).send({error: 'There is no coworking with such ID'})
        }
        if(pendingCoworking.status == "Pending"){
            pendingCoworking.status = "Rejected"
            return res.json({data:pendingCoworking})
        }
    }
       
    catch(error){
        console.log(error)
    }
 })

 //delete an event 
 // delete partner 
 //delete member
 //delete coworker
 


module.exports = router
