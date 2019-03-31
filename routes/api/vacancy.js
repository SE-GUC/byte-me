const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Vacancy = require('../../models/Vacancy')
const validator = require('../../validations/vacancyValidations')
const Partner = require('../../models/Partner')

//Get all vacancies
router.get('/', async (req,res) => {
    const vacancies = await Vacancy.find()
    res.json({data: vacancies})
})

  router.post('/create/:id1', async (req,res) => {
        try {
            const id1 = req.params.id1
           const partner = await Partner.findById(id1)
          if(!partner) return res.status(404).send({error: 'Partner does not exist'})  
             const isValidated = validator.createValidation(req.body)
           if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
               const newVacancy = await Vacancy.create(req.body)
               newVacancy.ownedBy=id1
               partner.vacancyID.push(newVacancy.id)
              return res.json({msg:'Vacancy was created successfully', data: newVacancy})
           }
              catch(error) {
              // We will be handling the error later
                  console.log(error)
            }  
         })
 
 // as a partner i should be able to update my vacancies so that i can keep my profile updated
 router.put('/update/:id', async (req,res) => {
    Vacancy.findByIdAndUpdate(req.params.id,req.body,{new : true}, (err,e)=>{
    if(err){
    return res.json({ error: `cannot update this request` })
    }else{
    return res.json({data:e})
    }
    })
    })

        
    router.put('/apply/:id1/:id2', async (req,res) => {
        try {
            
            const id1 = req.params.id1
            const member = await Member.findById(id1)
            if(!member) return res.status(404).send({error: 'Member does not exist'})    
            const id2 = req.params.id2
            const vac = await Vacancy.findById(id2)
          
            if(!vac) return res.status(404).send({error: 'Vacancy does not exist'})
            res.json({data:vac})
           }
           catch(error) {
               
               console.log(error)
           }  
        })
        
  
  router.get('/searchlocation/:location',async (req, res)=> {
    var location = req.params.location;
    await Vacancy.find({location: location},  (err, vacancy)=> {
     
        res.json({data:vacancy})
       
    });
});

router.get('/searchduration/:duration',async (req, res)=> {
    var duration = req.params.duration;
    await Vacancy.find({duration: duration},  (err, vacancy)=> {
     
        res.json({data:vacancy})
       
    });
});

router.get('/searchstartDate/:startDate',async (req, res)=> {
    var startDate = req.params.startDate;
    await Vacancy.find({startDate: startDate},  (err, vacancy)=> {
     
        res.json({data:vacancy})
       
    });
});
router.get('/searchendDate/:endDate',async (req, res)=> {
    var endDate = req.params.endDate;
    await Vacancy.find({endDate: endDate},  (err, vacancy)=> {
     
        res.json({data:vacancy})
       
    });
});

 router.delete('/delete/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedVacancy = await Vacancy.findByIdAndRemove(id)
     res.json({msg:'Vacancy was deleted successfully', data: deletedVacancy})
    }
    catch(error) {
        
        console.log(error)
    }  
 }),


 module.exports = router
