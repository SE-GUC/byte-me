const express = require('express')
const router = express.Router()

const Member = require('../../models/Member')
const validator = require('../../validations/memberValidations')

//Get my profile information (member)
router.get('/:id', async (req,res) => {
    var data = "";
    Member.forEach((value) => {
        if(value.ID === req.params.ID) {
            data = `First Name: ${value.firstname}<br>Last Name: ${value.lastname}
            <br>Email: ${value.email}<br>Expiry Date: ${value.expiryDate}
            <br>Date of Birth: ${value.dateOfBirth}<br>Skills: ${value.skills}<br>Age: ${value.age}<br>Skills: ${value.skills}
            <br>Interests: ${value.interests}<br>Password: ${value.password}
            <br>Past Attended Events: ${value.pastEventsAttended}<br>Contract Time: ${value.contractTime}
            <br>Contract Location: ${value.contractLocation}<br>Work Completed: ${value.workCompleted}
            <br>Reveiews: ${value.reviews}<br>Account Status: ${value.status}`;
            return;
        }
    });
    res.json(data || 'No member matches the requested id');
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
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const member = await Member.findOne({id})
     if(!member) return res.status(404).send({error: 'Member does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedMember = await Member.updateOne(req.body)
     res.json({msg: 'Member updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
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

module.exports = router
