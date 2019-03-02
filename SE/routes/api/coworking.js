const express = require('express')
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router()

// We will be connecting using database 
const COworking = require('../../models/COworking')
const Room= require('../../models/Room')
const Schedule= require('../../models/Schedule')

// temporary data created as if it was pulled out of the database ...
const schedules=[ 
    new Schedule("9:00 AM to 10:00 AM", 14/10/2005),
    new Schedule("10:00 AM to 11:00 AM", 14/10/2005),
    new Schedule("11:00 AM to 12:00 PM", 14/10/2005),
    new Schedule("12:00 PM to 1:00 PM", 14/10/2005),
    new Schedule("1:00 PM to 2:00 PM", 14/10/2005),
    new Schedule("2:00 PM to 3:00 PM", 14/10/2005),
    new Schedule("3:00 PM to 4:00 PM", 14/10/2005),
    new Schedule("4:00 PM to 5:00 PM", 14/10/2005),
    new Schedule("5:00 PM to 6:00 PM", 14/10/2005),
    new Schedule("6:00 PM to 7:00 PM", 14/10/2005),
    new Schedule("7:00 PM to 8:00 PM", 14/10/2005),
    new Schedule("8:00 PM to 9:00 PM", 14/10/2005),
    new Schedule("9:00 AM to 10:00 AM", 15/10/2005),
    new Schedule("10:00 AM to 11:00 AM", 15/10/2005),
    new Schedule("11:00 AM to 12:00 PM", 15/10/2005),
    new Schedule("12:00 PM to 1:00 PM", 15/10/2005),
    new Schedule("1:00 PM to 2:00 AM", 15/10/2005),
    new Schedule("2:00 PM to 3:00 AM", 15/10/2005),
    new Schedule("3:00 PM to 4:00 AM", 15/10/2005),
    new Schedule("4:00 PM to 5:00 AM", 15/10/2005),
    new Schedule("5:00 PM to 6:00 AM", 15/10/2005),
    new Schedule("6:00 PM to 7:00 AM", 15/10/2005),
    new Schedule("7:00 PM to 8:00 AM", 15/10/2005),
    new Schedule("8:00 PM to 9:00 AM", 15/10/2005)
];
const rooms=[
    new Room(405,schedules,"100 EGP per hour",50),
    new Room(406,schedules,"120 EGP per hour",50),
    new Room(407,schedules,"180 EGP per hour",50),
    new Room(408,schedules,"200 EGP per hour",50),
    new Room(409,schedules,"100 EGP per hour",50)
]
const COworkingS = [
    new COworking('q@w.com', 'qqqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online"),
    new COworking('qq@ww.com', 'qqqqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online"),
    new COworking('qw@wq.com', 'qqwwqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online"),
    new COworking('wq@qw.com', 'ddqqqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online"),
];

router.get('/', (req, res) => res.json({ data: COworkingS }))

router.get('/:id', (req, res) => {
    const COID = req.params.id 
    const space = COworkingS.find(space => space.id === COID)
    const index = COworkingS.indexOf(space)
    res.send(COworkingS[index])
});

router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const location = req.body.location
    const joinDate = req.body.joinDate
    const openingHours = req.body.openingHours
    const equipments = req.body.equipments
    const classicBasics = req.body.classicBasics
    const seating = req.body.seating
    const tour = req.body.tour
    const facilities = req.body.facilities
    const rooms = req.body.rooms
    const plans = req.body.plans
    const availability = req.body.availability

	const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        name: Joi.string().min(3).required(),
        location: Joi.string().required(),
        joinDate: Joi.string().required(),
        openingHours: Joi.string().required(),
        equipments: Joi.array().items(Joi.string()),
        classicBasics: Joi.array().items(Joi.string()), 
        seating: Joi.array().items(Joi.string()),
        tour: Joi.boolean().required(),
        facilities: Joi.array().items(Joi.string()),
        rooms: Joi.array().items(Joi.string()).required(),
        plans: Joi.array().items(Joi.string()),
        availability: Joi.string()
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newCOworking = {
        id: uuid.v4(),
        email,
        password,
        name,
        location,
        joinDate,
        openingHours,
        equipments,
        classicBasics,
        seating,
        tour,
        facilities,
        rooms,
        plans,
        availability,
	};
	COworkingS.push(newCOworking);
    res.send(COworkingS);
});

router.delete('/:id', (req, res) => {
    const COID = req.params.id 
    const space = COworkingS.find(space => space.id === COID)
    if(space===undefined){
        res.send("This ID is incorrect")
    }
    else{
        const index = COworkingS.indexOf(space)
        COworkingS.splice(index,1)
        res.send(COworkingS)
    }
});

router.put('/:id', (req, res) => {
    const COid = req.params.id
    const space = COworkingS.find(space => space.id === COid)
    if(space===undefined){
        res.send("This ID is incorrect")
    }
    else{
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name
        const location = req.body.location
        const joinDate = req.body.joinDate
        const openingHours = req.body.openingHours
        const equipments = req.body.equipments
        const classicBasics = req.body.classicBasics
        const seating = req.body.seating
        const tour = req.body.tour
        const facilities = req.body.facilities
        const rooms = req.body.rooms
        const plans = req.body.plans
        const availability = req.body.availability

        const schema = {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            name: Joi.string().min(3).required(),
            location: Joi.string().required(),
            joinDate: Joi.string().required(),
            openingHours: Joi.string().required(),
            equipments: Joi.array().items(Joi.string()),
            classicBasics: Joi.array().items(Joi.string()), 
            seating: Joi.array().items(Joi.string()),
            tour: Joi.boolean().required(),
            facilities: Joi.array().items(Joi.string()),
            rooms: Joi.array().items(Joi.string()).required(),
            plans: Joi.array().items(Joi.string()),
            availability: Joi.string()
        }

        const result = Joi.validate(req.body, schema);

        if (result.error) return res.status(400).send({ error: result.error.details[0].message });

        const newCOworking = {
            id: uuid.v4(),
            email,
            password,
            name,
            location,
            joinDate,
            openingHours,
            equipments,
            classicBasics,
            seating,
            tour,
            facilities,
            rooms,
            plans,
            availability,
        };
        COworkingS.push(newCOworking);
        res.send(COworkingS);
    }
});



module.exports = router
