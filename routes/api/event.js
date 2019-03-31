const express = require('express')
const router = express.Router()
const Event = require('../../models/Event')
const validator = require('../../validations/eventValidations')
const Member = require('../../models/Member')
const Partner = require('../../models/Partner')

//Get all events
router.get('/', async (req,res) => {
const events = await Event.find()
res.json({data: events})
}),

//Get an event
router.get('/:id', async (req,res) => {
const id = req.params.id
const events = await Event.findById(id)
res.json({data: events})
}),

//Create an event
router.post('/create', async (req,res) => {
const isValidated = validator.createValidation(req.body)
if (isValidated.error) return res.status(400).send({ error:
isValidated.error.details[0].message })
const newEvent = await Event.create(req.body)
res.json({msg:'Event was created successfully', data: newEvent})
}),


//Search event date
router.get('/searcheventDate/:eventDate',async(req,res)=>{
    var eventDate = req.params.eventDate;
    await Event.find({eventDate:eventDate},(err,event)=>{
          return res.json({data:event})
    });
  });
//Search event location
router.get('/searcheventLocation/:eventLocation',async(req,res)=>{
    var eventLocation = req.params.eventLocation;
    await Event.find({eventLocation:eventLocation},(err,event)=>{
           return res.json({data:event})
    });
  });
  
//Update an event
router.put('/update/:id', async (req,res) => {
Event.findByIdAndUpdate(req.params.id,req.body,{new : true}, (err,e)=>{
if(err){
return res.json({ error: `cannot update this request` })
}else{
return res.json({data:e})
}
})
})
//Put member id in the array attendees if he applied for an event
router.put('/applyevent/:id1/:id2', async (req,res) => {
    try {
        
        const id1 = req.params.id1
        const member = await Member.findById(id1)
        if(!member) return res.status(404).send({error: 'Member does not exist'})    
        const id2 = req.params.id2
        const vac = await Event.findById(id2)
        
        
        
        if(!vac) return res.status(404).send({error: 'Event does not exist'})
        vac.attendees.push(id1);
        console.log({data:vac})
         return res.json({data:vac})
        
       }
       catch(error) {
           
           console.log(error)
       }  
    })

//Put partner id in the array organized by if he created an event
router.put('/pcreateevent/:id1/:id2', async (req,res) => {
    try {
                            
        const id1 = req.params.id1
        const partner = await Partner.findById(id1)
        if(!partner) return res.status(404).send({error: 'Partner does not exist'})    
            const id2 = req.params.id2
            const pev = await Event.findById(id2)
            console.log(pev);
                            
                            
         if(!pev) return res.status(404).send({error: 'Event does not exist'})
             pev.organizedBy = id1;
             console.log(pev.organizedBy);
             return res.json({data:pev})
                 }
                 catch(error) { 
                     console.log(error)
                           }  
                        })

                        
//Delete an event
router.delete('/delete/:id', async (req,res) => {
try {
const id = req.params.id
const deletedevent = await Event.findByIdAndRemove(id)
res.json({msg:'event was deleted successfully', data: deletedevent})
}
catch(error) {
// We will be handling the error later
console.log(error)
}
})

module.exports = router
