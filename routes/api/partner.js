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


//get all partners
router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})
//As a partner i should get my profile information 
router.get('/viewProfile/:id', async (req,res) => {
    
    Partner.findById(req.params.id,function(err,partner){
    if(err) return res.json({Message:'No partner matches the requested id'});
    res.json({data: partner});
    })
});

//create profile
router.post('/', async (req,res) => {
    try {
        
     const isValidated = validator.createValidation(req.body)
     console.log("tt"+isValidated)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newPartner = await Partner.create(req.body)
     console.log(newPartner)
     res.json({msg:'partner was created successfully', data: newPartner})
    }
    catch(error) {
        
        console.log(error)
    }  
 })
 //update profile 
 /*router.put('update/:id', function (req,res){
    Partner.findOneAndUpdate(req.params.id,{$set:req.body},function(err,partner){
         if (err) return res.json({Message:'Error'});
         res.json({msg: 'Partner updated successfully'})
     })
     
});*/
router.put('/:id', async (req,res) => {
    Partner.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,e)=>{
        if(err){
            return res.json({error:'Cannot update this partner'})
        }
        else return res.json({data:e})
    })
})
//delete profile 
 router.delete('/delete/:id', async (req,res) => {
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
//view my events
router.get('/viewEvent/:id',async (req,res)=>{
     
    Vacancy.find({organizedBy:req.params.id},function(err,event){
        if(err) return res.json({Message:'Partner has no events'});
        res.json({data: event});  
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

//searched by  boardMembers
router.get('/searchMembers/:boardMembers',async (req, res)=> {
    var boardMembers = req.params.boardMembers;
    await Partner.find({boardMembers: boardMembers},  (err, partner)=> {
     
        res.json({data:partner})
       
    });
});
//searched by fieldOfWork
router.get('/searchfieldOfWork/:fieldOfWork',async (req, res)=> {
    var fieldOfWork = req.params.fieldOfWork;
    await Partner.find({fieldOfWork: fieldOfWork},  (err, partner)=> {
     
        res.json({data:partner})
       
    });
});
//searched by status
router.get('/searchstatus/:status',async (req, res)=> {
    var status = req.params.status;
    await Partner.find({status: status},  (err, partner)=> {
     
        res.json({data:partner})
       
    });
});



module.exports = router