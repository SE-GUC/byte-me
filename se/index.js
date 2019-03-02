const express = require('express')


const partnerco = require('./routes/api/partnerco')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>
    <a href="/api/partnerco">partnerco</a>
    
    `);
})

// Direct routes to appropriate files 

app.use('/api/partnerco', partnerco)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3001
app.listen(port, () => console.log(`Server up and running on port ${port}`))
