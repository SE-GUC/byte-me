const express = require('express')
const router = express.Router()

const notifications = [
    {
        message: "Room 405 booking from 9:00 AM TO 10:00 AM confirmed",
        status: "Read"
    },
    {
        message: "Room 406 booking from 9:00 AM TO 10:00 AM confirmed",
        status: "Not Read"
    }
];

router.get('/', (req, res) => res.json({ data: notifications }));
module.exports=router


 