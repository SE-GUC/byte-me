const express = require('express')

const coworkingSpace = require('./routes/api/coworkings')
const partner = require('./routes/api/partners')
const member = require('./routes/api/members')
const admin = require('./routes/api/admins')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/coworkings">coworking</a>
    <a href="/api/members">member</a>
    <a href="/api/partners">partner</a>
    <a href="/api/admins">admins</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/coworkings', coworkingSpace)
app.use('/api/partners', partner)
app.use('/api/members', member)
app.use('/api/admins', admin)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
