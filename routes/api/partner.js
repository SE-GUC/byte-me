const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Partner = require('../../models/Partner')
const validator = require('../../validations/partnerValidations')

//login 
router.post('/login', async (req,res) => {
    Partner.findOne({email:req.body.email})
    .exec()
    .then(doc => {
        console.log(doc)
        if (doc.password==req.body.password){
            res.json({Message:'Login Successful'});
        }
        else{
            res.json({Message:'Password incorrect'});
        }
    })
    .catch(err =>{console.log(err); return res.json({Message:`Email incorrect`})});
});



//As a partner i should get my profile information working
router.get('/:id', async (req,res) => {
    //localhost:8080/api/partner/5c9f5f51b058922f00f0aa41
    Partner.findById(req.params.id,function(err,partner){
    if(err) return res.json({Message:'No partner matches the requested id'});
    res.json({data: partner});
    })
});
/*As a partner i should search for partners 
 router.get('/', async (req,res) => {
    const partners = await Partner.find().select("-password")
    res.json({data: partners})
})*/
/*As a partner i should search for members 
router.get('/', async (req,res) => {
    const members = await Partner.find()
    res.json({data: partners})
})*/
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
 //update profile workinggg
 router.put('update/:id', function (req,res){
     Partner.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,partner){
         if (err) return res.json({Message:'Error'});
         res.json({msg: 'Partner updated successfully'})
     })
});
//delete profile workinngg
 router.delete('/:id', async (req,res) => {
     Partner.findByIdAndRemove(req.params.id,function(err,partner){
         if (err) return res.json({Message:'error'});
         res.json({msg:'Partner was deleted successfully'}); 
     }) 
 });
module.exports = router