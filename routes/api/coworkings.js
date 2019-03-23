const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Coworking = require('../../models/Coworking')
const validator = require('../../validations/Validations')

router.get('/', (req, res) => res.json({ data: COworkingS }))


// Update coworking
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const coworking = await Coworking.findOne({id})
     if(!coworking) return res.status(404).send({error: 'partner coworking space does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedcoworking = await Coworking.updateOne(req.body)
     res.json({msg: 'partner coworking space updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//Delete coworking
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedcoworking = await Coworking.findByIdAndRemove(id)
     res.json({msg:'partner coworking space was deleted successfully', data: deletedcoworking})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


module.exports = router
