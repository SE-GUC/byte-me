const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const coworkingSpace = require('./routes/api/coworkings')
const partner = require('./routes/api/partners')
const member = require('./routes/api/members')
const admin = require('./routes/api/admins')
const event = require('./routes/api/event')
const vacancy = require('./routes/api/vacancy')

const Coworking = require('./models/Coworking')
const Admin = require('./models/Admin')
const Partner = require('./models/Partner')
const Member = require('./models/Member')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Db config 
const db = require('./config/keys').mongoURI

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/coworkings">coworking</a>
    <a href="/api/members">member</a>
    <a href="/api/partners">partner</a>
    <a href="/api/admins">admins</a>
    <a href="/api/vacancy">vacancy</a>
    <a href="/api/events">events</a>
    `);
})

app.post('/register', async (req,res) => {
    try{
        const type = req.body.type
        const email = req.body.email
        const password = req.body.password
        const coworkingC = await Coworking.findOne({email})
        const adminC = await Admin.findOne({email})
        const partnerC = await Partner.findOne({email})
        const memberC = await Member.findOne({email})
        if(coworkingC||adminC||partnerC||memberC) return res.status(400).json({error: 'Email already used'})
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        if(type==="Member")
        {
            const schema = {
                email: Joi.string().email().required(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
                firstName: Joi.string().min(3).required(),
                lastName: Joi.string().min(3).required(),
                dateOfBirth: Joi.string().required(),
                skills: Joi.array().items(Joi.string()), 
                interests: Joi.array().items(Joi.string()),
                workCompleted: Joi.array().items(Joi.string())
            }
            const result = Joi.validate(req.body, schema);
            if (result.error) return res.status(400).send({ error: result.error.details[0].message });
            const {dateOfBirth, firstName, lastName , skills, interests, workCompleted}  = req.body
            const newMember = new Member({
                firstName,
                lastName,
                password: hashedPassword ,
                email,
                dateOfBirth,
                skills,
                interests,
                workCompleted
            })
            newMember
            .save()
            .then(res.json({msg: 'Registered as a member successfully'}))
            .catch(err => res.json({error: 'Can not create member'}))
        }
        else if(type==="Partner")
        {
            const schema = {
                email: Joi.string().email().required(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
                organizationName: Joi.string().min(3).required(),
                description: Joi.string(),
                partners: Joi.array().items(Joi.string()).required(), 
                boardMembers: Joi.array().items(Joi.string()).required(),
                fieldOfWork: Joi.array().items(Joi.string()).required()
            }
            const result = Joi.validate(req.body, schema);
            if (result.error) return res.status(400).send({ error: result.error.details[0].message });
            const {organizationName, description, partners, boardMembers, fieldOfWork}  = req.body
            const newPartner = new Partner({
                email,
                password: hashedPassword ,
                organizationName,
                description,
                partners,
                boardMembers,
                fieldOfWork
            })
            newPartner
            .save()
            .then(res.json({msg: 'Registered as a partner successfully'}))
            .catch(err => res.json({error: 'Can not create partner'}))

        }
        else if(type==="Coworking")
        {
            const schema = {
                email: Joi.string().email().required(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
                businessPlan: Joi.string().min(3).required(),
                rooms: Joi.array().items(Joi.string().required(),Joi.array().items()).required(), 
                facilities: Joi.array().items(Joi.string()).required(),
                name: Joi.string().required()
            }
            const result = Joi.validate(req.body, schema);
            if (result.error) return res.status(400).send({ error: result.error.details[0].message });
            const {businessPlan, name, rooms, facilities}  = req.body
            const newCoworking = new Coworking({
                email,
                password: hashedPassword ,
                name,
                businessPlan,
                rooms,
                facilities
            })
            newCoworking.save()
            .then(res.json({msg: 'Registered as a coworking space successfully'}))
            .catch(err => res.json({error: 'Can not create coworking space'}))
        }
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
})

// Direct routes to appropriate files 
app.use('/api/coworkings', coworkingSpace)
app.use('/api/partners', partner)
app.use('/api/members', member)
app.use('/api/admins', admin)
app.use('/api/vacancy', vacancy)
app.use('/api/events', event)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
