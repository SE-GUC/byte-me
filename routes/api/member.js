const express = require('express')
const router = express.Router()

const Member = require('../../models/Member')
const validator = require('../../validations/memberValidations')

router.get('/', async (req,res) =>{
    const members = await Member.find()
    res.json({data:members})
})

//Get my profile information (member)
router.get('/:id', async (req,res) => {
    const myID = req.params.id
    const mem = await Member.findById(myID)
    if(!mem) return res.status(404).send({error: 'There is no member with such ID'})
    res.json({data:mem})
})


// Create Member profile
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newMember = await Member.create(req.body)
    res.json({msg:'Member was created successfully', data: newMember})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

//Update a member
router.put('/:id', async (req,res)=>{
    Member.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,e)=>{
        if(err){
            return res.json({error:'Cannot update this member'})
        }
        else return res.json({data:e})
    })
})

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedMember = await Member.findByIdAndRemove(id)
     res.json({msg:'Member was deleted successfully', data: deletedMember})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//Login
router.post('/login', async (req,res) =>{
Member.findOne({email:req.body.email})
.exec()
.then(doc=>{
    console.log(doc)
    if(doc.password==req.body.password){
        res.json({Message:'Login Successful'});
    }
    else{
        res.json({Message:'Password Incorrect'});
    }
})
.catch(err =>{console.log(err); return res.json({Message:'Email Incorrect'})});
})

 //view jobs
 router.get('/viewJobs/', async (req,res) => {
     const alljobs = await Vacancy.find()
     res.json({data:alljobs})
 })

 

module.exports = router
