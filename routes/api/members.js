const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Member = require('../../models/Member')
const validator = require('../../validations/memberValidations')

//Get my profile information (member)
router.get('/', async (req,res) => {
    var data = "";
    members.forEach((value) => {
        if(value.id === req.params.id) {
            data = `First Name: ${value.fname}<br>Last Name: ${value.lname}
            <br>Email: ${value.email}<br>Expiring Date: ${value.expiringDate}
            <br>Age: ${value.age}<br>Skills: ${value.skills}
            <br>Interests: ${value.interests}<br>Password: ${value.password}
            <br>Past Attended Events: ${value.pastAttendedEvents}<br>Event Time: ${value.eventTime}
            <br>Event Location: ${value.eventLocation}<br>Work Comp: ${value.workComp}
            <br>Reveiews: ${value.reviews}<br>Account Status: ${value.accountStatus}
            <br>Certifications: ${value.certifications}`;
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