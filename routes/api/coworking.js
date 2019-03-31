const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Coworking = require('../../models/Coworking')
const validator = require('../../validations/coworkingValidations')

router.get('/', async (req,res) => {
    const coworkings = await Coworking.find().select("-password")
    res.json({coworkings})
})
//get specific coworking
router.get('/:id', async (req,res) => {
    try{
    const id = req.params.id
    const coworkings = await Coworking.findById(id)
    res.json({data: coworkings})
   
    }
    catch(error) {
        res.json({msg:'Coworking not found'}) 
               
            }

    
})

// //get all rooms

//     router.get(':id1/room/:id2', async (req,res) => {
//         try{
//         const idco = req.params.id1
//         const idroom = req.params.id2
//         const coworkingspecificroom= await Coworking.findOne(idco,idroom)
//         //const coworkingspecificroom = Coworking.room.findById({idroom})
         
//         res.json({coworkingspecificroom})
//         console.log("kk")
//         }
//         catch{
//         res.json({msg:'Room not found'})
//         } 
//     })

   
// })
//     catch(error) {
//         res.json({msg:'Coworking not found'}) 
               
//             }

    
// })

    


//room schedule with coworking id
router.get('/', async (req,res) => {
    const coworkings = await Coworking.find().select("-password")
    res.json({coworkings})
})
//
// router.post('/', async (req,res) => {
//    try {
       
//     const email = req.body.email
//     const password = req.body.password
//     const name = req.body.name
//     const facilities = req.body.facilities
//     const businessPlan = req.body.businessPlan
//     const isValidated = validator.coworkingCreateValidation({email, password, name, facilities, businessPlan})
//     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//     const newCoworking = await Coworking.create(req.body)
//     res.json({msg:'Coworker was created successfully', data: newCoworking})
//    }
//    catch(error) {
//        // We will be handling the error later
//        console.log(error)
//    }  
// })

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

 router.get('/searchname/:name',async (req, res)=> {
    var name = req.params.name;
    await Coworking.find({name: name},  (err, coworking)=> {
     
        res.json({data:coworking})
       
    });
});

router.get('/searchlocation/:location',async (req, res)=> {
    var location = req.params.location;
    await Coworking.find({location: location},  (err, location)=> {
        res.json({data:location})
        console.log("kk")
    });
});



module.exports = router
