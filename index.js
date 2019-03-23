const express = require('express')
const mongoose = require('mongoose')
const vacancy = require('./routes/api/vacancy')
const event = require('./routes/api/event')

const app = express()
app.use(express.json())

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
    <a href="/api/vacancy">vacancy</a>
    <a href="/api/event">event</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/vacancy', vacancy)
app.use('/api/event', event)
// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
