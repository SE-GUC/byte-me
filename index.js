const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')
//const cors=require('cors')
const keys = require ('./config/keys_dev')

const coworkingSpace = require('./routes/api/coworking')

const partner = require('./routes/api/partner')

const member = require('./routes/api/member')

const admin = require('./routes/api/admin')

const event = require('./routes/api/event')

const vacancy = require('./routes/api/vacancy')
const app = express()

 

//Db config

const db = require('./config/keys').mongoURI

// var mongoDB = process.env.mongoURI || keys.mongoURI

// mongoose.connect(mongoDB,{useNewUrlParser:true})

// mongoose.Promise=global.Promise

// var db = mongoose.connection;

// db.on('error',console.error.bind(console,'MongoDB connection error:'))

// mongoose.set('useFindAndModify',false)

// mongoose.set('useCreateIndex',true)

// app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({extended:false}))

 

//connect to mongo

mongoose

    .connect(db)

    .then(() => console.log('Connected to MongoDB'))

    .catch(err => console.log(err));

 

// app.use(express.json())

 

//app.use(express.urlencoded())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(cors())


app.use(express.urlencoded({extended: false}))

//app.use(cors())

 

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

 

// Direct routes to appropriate files

app.use('/api/coworking', coworkingSpace)

app.use('/api/partner', partner)

app.use('/api/member', member)

app.use('/api/admin', admin)

app.use('/api/vacancy', vacancy)

app.use('/api/event', event)

 

// Handling 404

app.use((req, res) => {

    res.status(404).send({err: 'We can not find what you are looking for'});

})

 

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))

 