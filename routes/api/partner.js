const express = require('express')
const router = express.Router()
const Partner = require('../../models/Partner')
const validator = require('../../validations/partnerValidations')
const Vacancy = require('../../models/Vacancy')

router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})
//Get my profile information (partner)
router.get('/:id', async (req,res) => {
    const myID = req.params.id
    const partner = await Partner.findById(myID)
    if(!partner) return res.status(404).send({error: 'There is no member with such ID'})
    res.json({data:[partner]})
})

//login 
router.post('/login', async (req,res) => {
    try {
		const { email, password } = req.body;
		const partner = await Partner.findOne({ email });
		if (!partner) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, partner.password);
		if (match) {
            const payload = {
                id: partner.id,
                name: partner.name,
                email: partner.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            res.json({data: `Bearer ${token}`})
            return res.json({ data: 'Token' })
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
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
    res.json({data: [partner]});
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
//Add board members
router.put('/addBoardMembers/:id',async (req, res)=> {
    var data = [];
    const partners = await Partner.find()
    var toAdd = req.body.boardMembers;
        partners.forEach((value) => {
         if(value.id === req.params.id) {
            value.boardMembers.push(` ${toAdd}`);
            var partners=value.partners;
            var eventID=value.eventID;
            var vacancyID=value.vacancyID;
            var status=value.status;
            var organizationName=value.organizationName;
            var email=value.email;
            var password=value.password;
            var description=value.description;
            var fieldOfWork=value.fieldOfWork;
            data=value.boardMembers;
            data={boardMembers:data, partners, eventID, vacancyID, status, organizationName, email, password, description, fieldOfWork};
            res.send(data);
            Partner.findOneAndUpdate(req.params.id,data,{new:true},(err,e)=>{
                if(err){
                    return res.json({error:'Cannot update this partner'})
                }
                //else return res.json({data:e})
            })
             return;
        }   
    });
    return res.json({error:'There is no such ID'})
});
//Add partners
router.put('/addPartners/:id',async (req, res)=> {
    var data = [];
    const partners = await Partner.find()
    var toAdd = req.body.partners;
    // for(i=0; i<partners.length; i++)
        partners.forEach((value) => {
         if(value.id === req.params.id) {
            value.partners.push(` ${toAdd}`);
            var boardMembers=value.boardMembers;
            var eventID=value.eventID;
            var vacancyID=value.vacancyID;
            var status=value.status;
            var organizationName=value.organizationName;
            var email=value.email;
            var password=value.password;
            var description=value.description;
            var fieldOfWork=value.fieldOfWork;
            data=value.partners;
            data={partners:data, boardMembers, eventID, vacancyID, status, organizationName, email, password, description, fieldOfWork};
            res.send(data);
            Partner.findOneAndUpdate(req.params.id,data,{new:true},(err,e)=>{
                if(err){
                    return res.json({error:'Cannot update this partner'})
                }
                //else return res.json({data:e})
            })
             return;
        }   
    });
    return res.json({error:'There is no such ID'})
});
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

// Create a Partner
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newPartner = await Partner.create(req.body)
    res.json({msg:'Partner was created successfully', data: newPartner})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})



module.exports = router