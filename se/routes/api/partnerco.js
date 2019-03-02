const express = require('express')
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router()

// We will be connecting using database 
const Partnerco = require('../../models/Partnerco')
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
    new Room(405,schedules,"100 EGP per hour"),
    new Room(406,schedules,"120 EGP per hour"),
    new Room(407,schedules,"180 EGP per hour"),
    new Room(408,schedules,"200 EGP per hour"),
    new Room(409,schedules,"100 EGP per hour")
]
const partnerco = [
    new Partnerco('q@w.com', 'qqqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online"),
    new Partnerco('qq@ww.com', 'qqqqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online"),
    new Partnerco('qw@wq.com', 'qqwwqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online"),
    new Partnerco('wq@qw.com', 'ddqqqq',"name1","location1",14/10/2005, "9:00 AM to 9:00 PM", ["ff","gg"],["ff","gg"],
    ["ff","gg"],true,["ff","gg"],rooms,["ff","gg"],"online")
];


router.get('/', (req, res) => res.json({ data: partnerco }))

module.exports = router

router.delete('/:id',(req,res) => {
    const pid = req.params.id
    const p = partnerco.find(p => p.id == pid)
    if ( p === undefined)
    {
        res.send('this id is not correct')
    }
        
    else{
        const index = partnerco.indexOf(p)
        partnerco.splice(index,1)
        res.send(partnerco)
    }
})



