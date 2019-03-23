const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Member = require('../../models/Member')
const validator = require('../../validations/memberValidations')

//Get my profile information (member)
router.get('/', async (req,res) => {
    var data = "";
    members.forEach((value) => {
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
    res.send(data || 'No member matches the requested id');
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



module.exports = router