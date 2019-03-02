const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const Admin = require('../api/Admin')

const admins = [new Admin("Ngolo","26","24/3/2008","ngl@gmail.com","skdcbhkdscdk"),
new Admin("Sarri","50","26/7/1990","lm@gmail.com","djfvnh")]

router.get('/', (req, res) => res.json({ data: admins }));

router.get('/:id',(req,res) => {
    const adid = req.params.id
   const adm = admins.find(admin => admin.id===adid)
   if(adm===undefined){
       res.send("This id is incorrect")
   }
   else{
       const name = adm.name
       const email = adm.email
       const age = adm.age
       const dateJoined = adm.dateJoined
       res.send(`Name: ${name}<br><br>E-Mail: ${email}<br><br>Age: ${age}<br><br>Date Joined: ${dateJoined}`)
   }
})

module.exports = router
