const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey

// We will be connecting using database 
const Coworking = require('../../models/Coworking')
const Partner = require('../../models/Partner')
const Admin = require('../../models/Admin')
const Member = require('../../models/Member')
const validator = require('../../validations/coworkingValidations')

//Get all Coworking
router.get('/', async (req,res) => {
    const coworking = await Coworking.find().select("-password")
    res.json({coworking})
})

//Edit a specific Coworking
router.put('/:id', async (req,res) => {
    ID = req.params.ID
    try{
        const isValidated = validator.coworkingUpdateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const {email, password} = req.body
        if(email){
            const admin = await Admin.findOne({email});
            const coworking = await Coworking.findOne({email});
            const partner = await Partner.findOne({email});
            const member = await Member.findOne({email});
            if (admin || coworking || partner || member) return res.status(400).json({ email: 'Email already exists' });
        }
        await Coworking.findOneAndUpdate(ID, req.body);
        if(password){
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
            await Coworking.findOneAndUpdate(ID, {password: hashedPassword});
        }
        res.json({ msg: 'Coworking updated successfully'});
    }
    catch(error){
        res.status(422).send({ error: 'This coworking does not exist' });
    }
})

//Add a new room to a specific Coworking
router.post('/:id/room', async (req,res) => {
    ID = req.params.ID
    try{
        const isValidated = validator.roomCreateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        await Coworking.findOneAndUpdate(ID, {$push: {'rooms': req.body}});
        res.json({ msg: 'Room added successfully'});
    }
    catch(error){
        res.status(422).send({ error: 'This coworking does not exist' });
    }
})

//Edit a specific room in a specific Coworking
router.put('/:id1/room/:id2', async (req,res) => {
    idCo = req.params.id1
    idRoom = req.params.id2
    try{
        const isValidated = validator.roomUpdateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const {roomNo, capacity, rate} = req.body
        var Co = [];
        if(roomNo) {
            await Coworking.update({"_id": idCo, "rooms._id": idRoom}, {$set: {"rooms.$.roomNo": roomNo}})
            Co +=roomNo
        } 
        if(capacity) {
             await Coworking.update({"_id": idCo, "rooms._id": idRoom}, {$set: {"rooms.$.capacity": capacity}})
             Co +=capacity
        }
        if(rate) {
            await Coworking.update({"_id": idCo, "rooms._id": idRoom}, {$set: {"rooms.$.rate": rate}})
            Co +=rate
        }
        res.json({ msg: 'Room updated successfully'}, {data: Co});
    }
    catch(error){
        res.status(422).send({ error: 'This coworking does not exist' });
    }
})

//Add a new schedule to a specific room in a specific Coworking
router.post('/:id1/room/:id2/schedule', async (req,res) => {
    idCo = req.params.id1
    idRoom = req.params.id2
    try{
        const isValidated = validator.scheduleCreateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const reservation = req.body
        if(reservation) await Coworking.update({"_id": idCo, "rooms._id": idRoom}, {$push: {"rooms.$.reservation": reservation}})
        res.json({ msg: 'Schedule updated successfully'});
    }
    catch(error){
        res.status(422).send({ error: 'This coworking or room does not exist' });
    }
})

//Edit a specific Schedule in a specific room in a specific Coworking
router.put('/:id1/room/:id2/schedule/:id3', async (req,res) => {
    idCo = req.params.id1
    idRoom = req.params.id2
    idS = req.params.id3
    try{
        await Coworking.findById(idCo).then(data => {
            if(!data)
                return res.status(422).send({ error: 'This coworking does not exist'});
            if(!data.rooms.id(idRoom))
                return res.status(422).send({ error: 'This room does not exist'});
            if(!data.rooms.id(idRoom).reservation.id(idS))
                return res.status(422).send({ error: 'This schedule does not exist'});
            })
        const isValidated = validator.scheduleUpdateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const date = req.body.date
        if(date){ 
        await Coworking.findById(idCo).then(data => {
            data.rooms.id(idRoom).reservation.id(idS).date = date;
            data.save();
        });
    }
        res.json({ msg: 'Date updated successfully'});
    }
    catch(error){
    }
})

//Reserving a specific schedule timing
router.put('/:id1/room/:id2/schedule/:id3/reserve/:id4', async (req,res) => {
    idCo = req.params.id1
    idRoom = req.params.id2
    idS = req.params.id3
    idR = req.params.id4
    try{
        await Partner.findById(idR).then(data => {
            if(!data) return res.status(422).send({ error: "No partner exists" })
        })
        await Coworking.findById(idCo).then(data => {
            if(!data)
                return res.status(422).send({ error: 'This coworking does not exist'});
            else if(!data.rooms.id(idRoom))
                return res.status(422).send({ error: 'This room does not exist'});
            else if(!data.rooms.id(idRoom).reservation.id(idS))
                return res.status(422).send({ error: 'This schedule does not exist'});
            else if(data.rooms.id(idRoom).reservation.id(idS).reserved)
                if(data.rooms.id(idRoom).reservation.id(idS).reserverID == idR)
                    return res.status(422).send({ error: 'You already reservered this timing'});
                else return res.status(422).send({ error: 'This timing is already reserved by another user'});                    
            })
        await Coworking.findById(idCo).then(data => {
            data.rooms.id(idRoom).reservation.id(idS).reserverID = idR;
            data.rooms.id(idRoom).reservation.id(idS).reserved = true;
            data.save();
        });
        res.json({ msg: 'Reserved successfully'});
    }
    catch(error){
        
    }
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

//Delete a specific Coworking account
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     await Coworking.findOneAndRemove(id)
     res.json({msg:'Coworking was deleted successfully'})
    }
    catch(error) {
        res.status(422).send({ error: 'This coworking does not exist' });
    }  
})

//Delete a specific room in a specific Coworking
router.delete('/:id1/room/:id2', async (req,res) => {
    try {
     const idCo = req.params.id1
     const idRoom = req.params.id2
     await Coworking.findOneAndUpdate(idCo , { $pull: { 'rooms': {  _id: idRoom } } })
     res.json({msg:'Room deleted succesfully'})
    }
    catch(error) {
        res.status(422).send({ error: 'This coworking or this room does not exist' });
    }  
})

//Register to a new Coworking account
router.post('/register', async (req,res) => {
    try {
     const isValidated = validator.coworkingCreateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const {email, password, name, facilities, businessPlan, rooms, location} = req.body
     const admin = await Admin.findOne({ email });
     const coworking = await Coworking.findOne({ email });
     const partner = await Partner.findOne({ email });
     const member = await Member.findOne({email});
     if (admin || coworking || partner || member) return res.status(400).json({ email: 'Email already exists' });
         const salt = bcrypt.genSaltSync(10);
         const hashedPassword = bcrypt.hashSync(password, salt);
         const newCoworking = new Coworking({
             name,
             password: hashedPassword,
             email,
             facilities,
             businessPlan,
             location,
             rooms
         });
         await Coworking.create(newCoworking);
         res.json({ msg: 'Coworking created successfully'});
     } catch (error) {
         res.status(422).send({ error: 'Can not create coworking' });
     }
 })
 
//Login to a Coworking account
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const coworking = await Coworking.findOne({ email });
		if (!coworking) return res.status(404).json({ email: 'Email does not exist' });
		const match = bcrypt.compareSync(password, coworking.password);
		if (match) {
            const payload = {
                id: coworking.id,
                name: coworking.name,
                email: coworking.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            res.json({data: `Bearer ${token}`})
            return res.json({ data: 'Token' })
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});

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
