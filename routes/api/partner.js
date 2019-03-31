const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Partner = require('../../models/Partner')
const Vacancy = require('../../models/Vacancy')

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
    
    Partner.findById(req.params.id,function(err,partner){
    if(err) return res.json({Message:'No partner matches the requested id'});
    res.json({data: partner});
    })
});

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
 router.put('update/:id', function (req,res){
     Partner.findByIdAndUpdate(req.params.id,{$set:req.body},function(err,partner){
         if (err) return res.json({Message:'Error'});
         res.json({msg: 'Partner updated successfully'})
     })
});
//delete profile 
 router.delete('/:id', async (req,res) => {
     Partner.findByIdAndRemove(req.params.id,function(err,partner){
         if (err) return res.json({Message:'error'});
         res.json({msg:'Partner was deleted successfully'}); 
     }) 
 });

 //view my vacancies
 router.get('/view/:id',async (req,res)=>{
     
    Vacancy.find({ownedBy:req.params.id},function(err,vacancy){
        if(err) return res.json({Message:'Partner has no vacacncies'});
        res.json({data: vacancy});  
    })
    
});
//get vacancy applicants
router.get('/viewApplicants/:id',async (req,res)=>{
     
    Vacancy.findOne()
    .exec()
    .then(doc => {
        console.log(doc)
        if (doc.ownedBy==req.params.id){
            res.json({data:doc.applicants});
        }
        else{
            res.json({Message:'Not his vacancy'});
        }
    })
    .catch(err =>{console.log(err); return res.json({Message:`no vacancies`})});
    
});
//update vacancy description
/*router.put('updateDescription/:id', function (req,res){
    Vacancy.findOneAndUpdate({ownedby:req.params.id},{$set:req.body.description},function(err,vacancy){
        if (err) return res.json({Message:'Error'});
        res.json({msg: 'description of vacancy updated successfully'})
    })
});*/
router.get('search/organizationName',async (req,res)=>{
    try{
        const organizationName=req.params.organizationName
        await partner.findOne({organizationName: new RegExp('^'+organizationName+'$',"i")},
        function(err, doc){})
        res.json({data: partner}
            )
    }
    catch(error){
        console.log(error)
    }
})



module.exports = router