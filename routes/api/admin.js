const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const Partner = require('../../models/Partner')
const Coworking = require('../../models/Coworking')
const Member = require('../../models/Member')
const Admin = require('../../models/Admin')

router.get('/:id', async (req,res) => {
    var data = "";
    Admin.findOne((value) => {
        if(value.ID === req.params.ID && value.password) {
            data = `First Name: ${value.firstName}<br>Last Name: ${value.lastName}
            <br>Email: ${value.email}`;
            return;
        }
        else if(value.ID === req.params.ID && value.password == null) res.status(400).send({ error: "Please add a password to proceed" })
    });
    res.json(data || 'No admin matches the requested id');
})

router.get('/', async (req,res) => {
    const admin = await Admin.find()
    res.json(admin);
})

router.post('/', async (req,res) => {
    try {
     const newAdmin = await Admin.create(req.body)
     res.json({msg:'Coworker was created successfully', data: newAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

// router.get('/', async (req,res) => {
//     var data = "";
//     Admin.find((value) => {
//         data += `First Name: ${value.firstName}<br>Last Name: ${value.lastName}
//         <br>Email: ${value.email}<br><br>`;
//     });
//     res.json(data || 'No admin found');
// })

router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Admin.findOne({id})
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const email = req.body.email
     const used = await Admin.findOne({email}) && Partner.findOne({email}) && Coworking.findOne({email}) && Member.findOne({email})
     if(used) return res.status(400).json({error: 'Email already exists'})
     const password = req.body.password
     const salt = bcrypt.genSaltSync(10)
     const hashedPassword = bcrypt.hashSync(password,salt)
     const firstName = req.body.firstName
     const lastName = req.body.lastName
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     await Admin.updateOne({firstName,lastName,email,hashedPassword})
     var data = "";
     Admin.findOne((value) => {
        if(value.ID === ID) {
            data = `First Name: ${value.firstname}<br>Last Name: ${value.lastname}
            <br>Email: ${value.email}`;
            return;
        }
    });
     res.json({msg: 'Admin updated successfully'}, data)
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router