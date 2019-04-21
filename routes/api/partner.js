const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Partner = require('../../models/Partner')
const validator = require('../../validations/partnerValidations')
const Vacancy = require('../../models/Vacancy')
const Event = require ('../../models/Event')

router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})

//login 
router.post('/login', async (req,res) => {
    try {
        console.log('login')
		const { email, password } = req.body;
		const partner = await Partner.findOne({ email });
		if (!partner) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, partner.password);
		if (match) {
            const payload = {
                id: partner.id,
                name: partner.organizationName,
                email: partner.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '5h' });
            console.log(token);
            store.set("token",token);
            console.log(token.payload);
            res.json({data: `Bearer ${token}`})
            return res.json({ data: 'Token' })
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});
router.get('/logout', async (req, res)=> {
    console.log("logout");
    store.remove("token");
    res.send('logged out');
});
const checkToken = (req, res, next)=> {
    const header =req.headers ['authorization'];

    if(typeof header !== 'undefined')
    {
        const bearer =header.split('');
        const token =bearer[1];
        req.token=token;
        next();
    }
    else{
        res.sendStatus(403)
    }
};

//get all partners
router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})
//As a partner i should get my profile information 
router.get('/viewProfile/:id', async (req,res) => {
    jwt.verify(store.get('token'),tokenKey,async(err,authorizedData)=> {
        if(err)
        {
            console.log('ERROR:could not connect to the protected route');
            res.sendStatus(403);
        }else{
            Partner.findById(req.params.id,function(err,partner){
                if(err) return res.json({Message:'No partner matches the requested id'});
                res.json({data: [partner]});
                })
   }
    });
    
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
            value.partners.push(` ${toAdd}`);
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
     jwt.verify(store.get('token'),tokenKey,async(err,authorizedData)=> {
         if(err)
         {
             console.log('ERROR:could not connect to the protected route');
             res.sendStatus(403);
         }else{
         Partner.findByIdAndRemove(req.params.id,function(err,partner){
            if (err) return res.json({Message:'error'});
            res.json({msg:'Partner was deleted successfully'}); 
        })
    }
     });
      
 });

 //view my vacancies
 router.get('/view/:id',async (req,res)=>{
     
    jwt.verify(store.get('token'),tokenKey,async(err,authorizedData)=> {
        if(err)
        {
            console.log('ERROR:could not connect to the protected route');
            res.sendStatus(403);
        }else{
            Vacancy.find({ownedBy:req.params.id},function(err,vacancy){
                if(err) return res.json({Message:'Partner has no vacacncies'});
                res.json({data: vacancy});  
            })
            
   }
    });
    
});
//view my events
router.get('/viewEvent/:id',async (req,res)=>{
     
    Event.find({organizedBy:req.params.id},function(err,event){
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
//get event attendees 
router.get('/viewAttendees/:id',async (req,res)=>{
     
    Event.findOne()
    .exec()
    .then(doc => {
        console.log(doc)
        if (doc.organizedBy==req.params.id){
            res.json({data:doc.attendees});
        }
        else{
            res.json({Message:'Not his event'});
        }
    })
    .catch(err =>{console.log(err); return res.json({Message:`no events`})});
    
});
//searched by organizationName
router.get('/searchOrganizationName/:organizationName',async (req, res)=> {
    var organizationName = req.params.organizationName;
    await Partner.find({organizationName: organizationName},  (err, partner)=> {
     
        res.json({data:partner})
       
    });
});
//searched by email
router.get('/searchEmail/:email',async (req, res)=> {
    var email = req.params.email;
    await Partner.find({email: email},  (err, partner)=> {
     
        res.json({data:partner})
       
    });
});
//searched by description
router.get('/searchDescription/:description',async (req, res)=> {
    var description = req.params.description;
    await Partner.find({description: description},  (err, partner)=> {
     
        res.json({data:partner})
       
    });
});
//searched by partners
router.get('/searchPartners/:partners',async (req, res)=> {
    var partners = req.params.partners;
    await Partner.find({partners: partners},  (err, partner)=> {
     
        res.json({data:partner})
       
    });
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