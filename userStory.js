const express = require('express')
const app = express()
const Joi = require('joi')
app.use(express.json())



const member = require('../../models/member')
const User = require('../../models/User')
const Vacancy=require('../../models/Vacancy')

const users = [
    new member("melissa","melissa@yahoo.com","123rtd",["sports"],["going out","playing piano"],[" certificate in cs"]
    ,["social event","conference"],["SE project","OSproject"],["hard worker","has many potentials"],"21")]

const Vacancy =[
    new Vacancy ("it consists of creating a database system for a company","from:20-3-2019 to:20-4-2019"),
    new Vacancy ("it consists of creating a website for a company", "from:4-4-2019 to:4-5-2019")
]
// edit profile (member)
app.put('/joi',(req,res) => {
    
    const x = req.params.id
    const y = users.find(member => member.id===x)
    
    if(y===undefined ){
        res.send("This id is incorrect")
    }
    else{
       
    const nameE=req.body.name
    const emailE=req.body.email
    const passwordE=req.body.password
    const skillsE=req.body.skills
    const interestsE=req.body.interests
    const certificatesE=req.body.certificates
    const eventsE=req.body.events
    const projectsE=req.body.projects
    const reviewsE=req.body.reviews
    const ageE=req.body.age
    const schema = {
        nameE: Joi.string().min(3).required(),
        emailE:Joi.string().min(8).required(),
        passwordE:Joi.string().min(5).required(),
        skillsE:Joi.array().required(),
        interests:Joi.array().required(),
        certificatesE:Joi.array().required(),
        eventsE:Joi.array().required(),
        projectsE:Joi.array().required(),
        reviewsE:Joi.array().required(),
		ageE: Joi.number().integer().required(),
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    y.name=nameE
    y.email=emailE
    y.password=passwordE
    y.skills=skillsE
    y.interests=interestsE
    y.certificates=certificatesE
    y.events=eventsE
    y.projects=projectsE
    y.reviews=reviewsE
    y.age=ageE
    /*function edit(name,email,password,skills,interests,certificates,events,projects,reviews,age){
         y.name=getElementById("name").value
         y.email=getElementById("email").value
         y.password=getElementById("password").value
         y.skills=getElementById("skills").value
         y.interests=getElementById("interests").value
         y.certificates=getElementById("certificates").value
         y.events=getElementById("events").value
         y.projects=getElementById("projects").value
         y.reviews=getElementById("reviews").value
         y.age=getElementById("age").value}*/ }
     res.send(member)
    })
 //as a memeber i can view available vacancies to be able to apply for it
app.get('/api/vacancy/:id',(req,res) =>{
    const vacID = req.params.id
    const vac = vacancy.find(vacancy => vacancy.id===vacID)
    if(vac===undefined ){
        res.send("This id is incorrect")
    }
    else{
     const description= vac.description
     const duration=vac.duration
     res.send(`Description: ${description}<br><br>Duration: ${duration}`)
    }
    }
)
const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))