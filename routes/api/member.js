const express = require('express')
const router = express.Router()

const Member = require('../../models/Member')
const validator = require('../../validations/memberValidations')

//Get my profile information (member)
router.get('/:id', async (req,res) => {
    const myID = req.params.id
    const mem = await Member.findOne({myID})
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

// Update a Member
// router.put('/:id', async (req,res) => {
//     try {
//      const id = req.params.id
//      const member = await Member.findOne({id})
//      if(!member) return res.status(404).send({error: 'Member does not exist'})
//      const isValidated = validator.updateValidation(req.body)
//      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//      const updatedMember = await Member.updateOne(req.body)
//      res.json({msg: 'Member updated successfully'})
//     }
//     catch(error) {
//         // We will be handling the error later
//         console.log(error)
//     }  
//  })

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

 //view jobs
 router.get('/viewJobs/', async (req,res) => {
     const alljobs = await Vacancy.find()
     res.json({data:alljobs})
 })

module.exports = router
