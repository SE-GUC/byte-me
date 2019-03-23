const express = require('express')
const mongoose = require('mongoose')

const coworkingSpace = require('./routes/api/coworkings')
const partner = require('./routes/api/partners')
const member = require('./routes/api/members')
const admin = require('./routes/api/admins')
const event = require('./routes/api/event')
const vacancy = require('./routes/api/vacancy')

const app = express()
app.use(express.json())

//Db config 
const db = require('./config/keys').mongoURI

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))


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

// Direct routes to appropriate files 
app.use('/api/coworkings', coworkingSpaces)
app.use('/api/partners', partners)
app.use('/api/members', members)
app.use('/api/admins', admins)
app.use('/api/vacancy', vacancy)
app.use('/api/events', events)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
