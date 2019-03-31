const express = require('express')
const router = express.Router()
const Event = require('../../models/Event')
const validator = require('../../validations/eventValidations')

//Get all events
router.get('/', async (req,res) => {
    const events = await Event.find()
    res.json({data: events})
})
router.put('/update/:id', async (req,res) => {
    Event.findByIdAndUpdate(req.params.id,req.body,{new : true}, (err,e)=>{
    if(err){
    return res.json({ error: `cannot update this request` })
    }else{
    return res.json({data:e})
    }
    })
    })
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
