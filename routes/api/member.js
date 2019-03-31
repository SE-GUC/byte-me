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
//Search for First Name
 router.get('/searchfirstName/:firstName',async (req, res)=> {
    var firstName = req.params.firstName;
    await Member.find({firstName: firstName},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Last Name
router.get('/searchlastName/:lastName',async (req, res)=> {
    var lastName = req.params.lastName;
    await Member.find({lastName: lastName},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Email
router.get('/searchemail/:email',async (req, res)=> {
    var email = req.params.email;
    await Member.find({email: email},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Age
router.get('/searchage/:age',async (req, res)=> {
    var age = req.params.age;
    await Member.find({age: age},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Skills
router.get('/searchskills/:skills',async (req, res)=> {
    var skills = req.params.skills;
    await Member.find({skills: skills},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Interests
router.get('/searchinterests/:interests',async (req, res)=> {
    var interests = req.params.interests;
    await Member.find({interests: interests},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Work Completed
router.get('/searchworkcompleted/:workcompleted',async (req, res)=> {
    var workcompleted = req.params.workcompleted;
    await Member.find({workcompleted: workcompleted},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Reviews
router.get('/searchreviews/:reviews',async (req, res)=> {
    var reviews = req.params.reviews;
    await Member.find({reviews: reviews},  (err, member)=> {
     
        res.json({data:member})
       
    });
});
//Search for Status
router.get('/searchstatus/:status',async (req, res)=> {
    var status = req.params.status;
    await Member.find({status: status},  (err, member)=> {
     
        res.json({data:member})
       
    });
});

module.exports = router
