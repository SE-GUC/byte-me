const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require("passport");
const bodyParser = require('body-parser')
const coworkingSpace = require('./routes/api/coworking')
const partner = require('./routes/api/partner')
const member = require('./routes/api/member')
const admin = require('./routes/api/admin')
const event = require('./routes/api/event')
const vacancy = require('./routes/api/vacancy')
const app = express()
app.use(cors())
const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/coworking">coworking</a>
    <a href="/api/member">member</a>
    <a href="/api/partner">partner</a>
    <a href="/api/admin">admin</a>
    <a href="/api/vacancy">vacancy</a>
    <a href="/api/event">event</a>
    `);
})

app.use('/api/coworking', coworkingSpace)
app.use('/api/partner', partner)
app.use('/api/member', member)
app.use('/api/admin', admin)
app.use('/api/vacancy', vacancy)
app.use('/api/event', event)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
//app.use("/api/partner", partners);
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
