// const express = require('express');
// const uuid = require('uuid');
// const router = express.Router();

// const Member = require('../models/Member')
// const event = require ('../../models/Event');

// const COworkingS=require('../../routes/api/coworking')

// const users = [
//     new Member("Ahmad Elkilany","20",["playing football","drawing"],["watch tv","play fifa","go to gym"],["Masterclass in js","certificate in java"]
//     ,[{evnt:"conference",date:"1-1-2019",location:"qa3et elmo2tamarat"},{evnt:"lecture",date:"23-7-2017",location:"h12"}],[{task:"dbProj",date:"20/9-23/12"},{task:"dsdProj",date:"12/11-30/11"}],
//     [{by:"Doctor",content:"Great job",date:"6/3"},{by:"TA",content:"malla project",date:"12/2"}],"mymail","cds000"),
//     new Member("Eden Hazard","27",["playing football","drawing"],["watch tv","play fifa","go to gym"],["Masterclass in js","certificate in java"]
//     ,[{evnt:"conference",date:"1-1-2019",location:"qa3et elmo2tamarat"},{evnt:"lecture",date:"23-7-2017",location:"h12"}],[{task:"dbProj",date:"20/9-23/12"},{task:"dsdProj",date:"12/11-30/11"}],
//     [{by:"Doctor",content:"Great job",date:"6/3"},{by:"TA",content:"malla project",date:"12/2"}],"asec@","cdadcdff0933")
// ]

// router.get('/', (req, res) => res.json({ data: users }));

// router.get('/:id', (req, res) => res.json({ data: COworkingS }));

// router.get('/:id',(req,res) =>{ //As a member, I can view my profile information
//     const memID = req.params.id
//     const mem = users.find(member => member.id===memID)
//     if(mem===undefined ){
//         res.send("This id is incorrect")
//     }
//     else{
//         const name = mem.name
//         const age = mem.age
//         const skills = mem.skills
//         var allskills = "<ul>"
//         for(const sk of skills){
//             allskills+=`<li>${sk}</li>`
//         }
//         allskills+="</ul>"
//         const als = allskills
//         const interests = mem.interests
//         var allinterests = "<ul>"
//         for(const inn of interests){
//             allinterests+=`<li>${inn}</li>`
//         }
//         allinterests+="</ul>"
//         const alin = allinterests
//         const past_events = mem.events
//         var pasts = "<ul>"
//         for(const e of past_events){
//             pasts+=`<li>Event: ${e.evnt}, Date: ${e.date}, Location: ${e.location}`
//         }
//         pasts+="</ul>"
//         const pes = pasts
//         const proj_tasks = mem.projects
//         var projtas = "<ul>"
//         for(const pt of proj_tasks){
//             projtas+=`<li>Task/Project: ${pt.task}, Date: ${pt.date}`
//         }
//         projtas+="</ul>"
//         const pts = projtas
//         const reviews = mem.reviews
//         var revws = "<ul>"
//         for(const r of reviews){
//             revws+=`<li>Received by: ${r.by}, Review Content: ${r.content}, Review Date: ${r.date}`
//         }
//         revws+="</ul>"
//         const revs = revws
//         const certificates_masterclasses = mem.certificates
//         var cermasts = "<ul>"
//         for(const cm of certificates_masterclasses){
//             cermasts+=`<li>${cm}</li>`
//         }
//         cermasts+="</ul>"
//         const cms = cermasts
//         const mail = mem.email
//         res.send(`Name: ${name}<br><br>Age: ${age}<br><br>Skills: ${als}Interests: ${alin}
//         Past Events: ${pes}Projects/Tasks completed: ${pts}Reviews Received: ${revs}
//         Certificates/Masterclasses Held: ${cms}E-Mail: ${mail}
//         `)
//     }
// })

// router.post('/:id',(req,res) =>{
//     const memberrid = req.params.id
//     const member = User.find(users => users.id===memberid)
//    if(member===undefined)
//    {
//        res.send('You cannot post a new event! ')
//    }
//    else{
//        const evnt = req.body.evnt
//        const location = req.body.location
//        const date = req.body.date
//        const schema = {
//         name:Joi.string().required,
//         location: Joi.string().required,
//         date:Joi.string().required
//        }
//        const result = Joi.validate(req.body, schema);
//        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
//        const newEvent = new event(evnt,date,location)
//        member.events.push(newEvent)
//        res.send(users)
//    }
// });
// router.post('/:id',(req,res) =>{
//     const memberrid = req.params.id
//     const member = User.find(users => users.id===memberid)
//    if(member===undefined)
//    {
//        res.send('You cannot post a new event! ')
//    }
//    else{
//        const name = req.body.name
//        const location = req.body.location
//        const date = req.body.date
//        const schema = {
//         name:Joi.string().required,
//         location: Joi.string().required,
//         date:Joi.string().required
//        }
//        const result = Joi.validate(req.body, schema);
//        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
//        const newcourse = new course(name,date,location)
//        member.courses.push(newcourse)
//        res.send(users)
//    }
// });
// router.post('/:id',(req,res) =>{
//     const memberrid = req.params.id
//     const member = User.find(users => users.id===memberid)
//    if(member===undefined)
//    {
//        res.send('You cannot post a new event! ')
//    }
//    else{
//        const name = req.body.name
//        const location = req.body.location
//        const date = req.body.date
//        const schema = {
//         name:Joi.string().required,
//         location: Joi.string().required,
//         date:Joi.string().required
//        }
//        const result = Joi.validate(req.body, schema);
//        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
//        const newws = new workshop(name,date,location)
//        member.workshops.push(newws)
//        res.send(users)
//    }
// });

// router.post('/', (req, res) => {
//     const name = req.body.name
//     const age = req.body.age
//     const skills = req.body.skills
//     const interests = req.body.interests
//     const certificates=req.body.certificates
//     const events=req.body.events
//     const projects=req.body.projects
//     const reviews=req.body.reviews
//     const email=req.body.email
//     const password=req.body.password
    
//     const schema ={
//         name:Joi.string().min(3).required(),
//         age:Joi.number().required(),
//         skills:Joi.string().required(),
//         interests:Joi.string().required(),
//         certificates:Joi.string().required(),
//         events:Joi.string().required(),
//         projects:Joi.string().required(),
//         reviews:Joi.string().required(),
//         email:Joi.string().required(),
//         password:Joi.string().required(),
//     }
   
//    const results=Joi.validate(req.body, schema);
//    if (result.error) return res.status(400).send({error:result.error.details[0].message})
   
   
   
//     const newMem = {
//         name,
//         age,
//         skills,
//         interests,
//         certificates,
//         events,
//         projects,
//         reviews,
//         email,
//         password
        
        
//     };
//     return res.json({data:newMem});

// });

// router.put('/:id',(req,res) => {
    
//     const x = req.params.id
//     const y = users.find(y => y.id===x)
    
//     if(y===undefined ){
//         res.send("This id is incorrect")
//     }
//     else{
       
//     const name=req.body.name
//     const email=req.body.email
//     const password=req.body.password
//     const skills=req.body.skills
//     const interests=req.body.interests
//     const certificates=req.body.certificates
//     const events=req.body.events
//     const projects=req.body.projects
//     const reviews=req.body.reviews
//     const age=req.body.age
//     const schema = {
//         name: Joi.string().min(3),
//         email:Joi.string().email(),
//         password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
//         skills:Joi.array().items(Joi.string()),
//         interests:Joi.array().items(Joi.string()),
//         certificates:Joi.array().items(Joi.string()),
//         events:Joi.array().items(Joi.string()),
//         projects:Joi.array().items(Joi.string()),
//         reviews:Joi.array().items(Joi.string()),
// 		age: Joi.array().items(Joi.string()),
//     }
//     const result = Joi.validate(req.body, schema);
//     if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    
  
//    y.name=name
//     y.email=email
//     y.password=password
//     y.skills=skills
//     y.interests=interests
//     y.certificates=certificates
//     y.events=events
//     y.projects=projects
//     y.reviews=reviews
//     y.age=age
//     users.push(y)
//     res.send(users);
//     /*function edit(name,email,password,skills,interests,certificates,events,projects,reviews,age){
//          y.name=getElementById("name").value
//          y.email=getElementById("email").value
//          y.password=getElementById("password").value
//          y.skills=getElementById("skills").value
//          y.interests=getElementById("interests").value
//          y.certificates=getElementById("certificates").value
//          y.events=getElementById("events").value
//          y.projects=getElementById("projects").value
//          y.reviews=getElementById("reviews").value
//          y.age=getElementById("age").value}*/ }
     
//     });

// module.exports = router

// //---------------------------------------- Member deletes their profile//---
// router.delete('/:id',(req,res) => {
//     const memberId = req.params.id
//     const deletedMember = Member.find(deletedMember => Member.id == memberId)
//     if ( deletedMember === undefined)
//     {
//         res.send('this id is not correct')
//     }
        
//     else{
//         const index = Member.indexOf(deletedMember)
//         Member.splice(index,1)
//         res.send(Member)
//     }
// })

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Member = require('../../models/Member')

//const validator = require('../../validations/bookValidations')
const eventValidator = require('../../validations/eventValidations')

router.get('/', async (req,res) => {
    const members = await Member.find()
    res.json({data: members})
})

// Create a Member
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

 router.post('/createEvent', async (req,res) =>{//as a member I can create an event 
    try{
        const isValidated = eventValidator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newEvent = await Event.create(req.body)
        res.json({msg:'Event was created successfully', data: newEvent})
    }
    catch(error){
        console.log(error)
    }
 })

 router.get('viewEvent/:id', async (req,res) =>{
     try{
        const eventID = req.params.id
        const curEvent = await Event.findOne({eventID})
        if(!curEvent) return res.status(404).send({error: 'An event with that ID does not exist'})
        res.json({data : curEvent})
     }
     catch(error){
         console.log(error)
     }
 })

 

module.exports = router