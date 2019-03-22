const express = require('express')
const app = express()
const Joi = require('joi')
const router = express.Router();


const Partner = require('../../models/Partner').default
const Vacancy = require('../../models/Vacancy')
const Event = require('../../models/Event')

const Vacancyarr = [
    new Vacancy("des","dur","mem"),
    new Vacancy("des2","dur2","mem2")
]
const Partners = [
    new Partner("rana","20","rana.ramy@gnail.com","seflsefn5","ahmed",["ahmed","aly"],[{evnt:"conference",date:"1-1-2019",location:"qa3et elmo2tamarat"},{evnt:"lecture",date:"23-7-2017",location:"h12"}],'cs',Vacancyarr)
]

//Get all partners
router.get('/', (req, res) => res.json({ data: Partners }));
//user story 3.3 delete profile
router.delete('/:id',(req,res) =>{
    const partnerid = req.params.id
    const partner = Partners.find(Partners => Partners.id===partnerid)
    if(partner===undefined){
        res.send('Not found')
    }
    else{
    const index = Partners.indexOf(partner)
    Partners.splice(index,1)
    res.send(Partners)
    }
});
//userstory 3.5 post vacancy

router.put('/:id',(req,res) =>{
    const partnerid = req.params.id
    var partner = Partners.find(Partners => Partners.id===partnerid)
    const index = Partners.indexOf(partner)
   if(partner===undefined)
   {
       res.send('You cannot post a new vacancy! ')
   }
   else{
       const description = req.body.description
       const duration = req.body.duration
       const members = req.body.members
       const schema = {
        description:Joi.string().required(),
        duration : Joi.string().required(),
        members:Joi.string().required()
       }
       const result = Joi.validate(req.body, schema);
       if (result.error) return res.status(400).send({ error: result.error.details[0].message });
       const newVacancy = new Vacancy(description,duration,members)
       Partners[index].vacancies.push(newVacancy)
       res.send(Partners)
       
   }
});
//userstory 3.6 update vacancy

router.put('/:id/:id2',(req,res) =>{
    const partnerid = req.params.id
    const partner = Partners.find(Partners => Partners.id===partnerid)
    const vacancy = req.params.id2
    const ind = Partners.indexOf(partner)
    var vac2 = Partners[ind].vacancies.find(v => vacancy===v.id)
    const indexvac = Partners[ind].vacancies.indexOf(vac2)
   if(partner===undefined || vac2===undefined)
   {
       res.send('You cannot update a vacancy! ')
   }
   else {
   const updatedDescription = req.body.description
   const updatedDuration = req.body.duration
   const updatedmembers = req.body.members
   const schema = {
    description:Joi.string(),
    duration : Joi.string(),
    members:Joi.string()
   }
   const result = Joi.validate(req.body, schema);
   if (result.error) return res.status(400).send({ error: result.error.details[0].message });
//    partner.vacancies.description = updatedDescription
//    partner.vacancies.duration = updatedDuration
   vac2.description = updatedDescription
   vac2.duration = updatedDuration
   vac2.members = updatedmembers
   Partners[ind].vacancies[indexvac].description = updatedDescription
   Partners[ind].vacancies[indexvac].duration = updatedDuration
   Partners[ind].vacancies[indexvac].members = updatedmembers
   res.send(Partners)
   }
});

    router.post('/', (req, res) => {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const partners = req.body.partners
        const boardmembers = req.body.boardmembers
        const events = req.body.events
        const field = req.body.field
        const vacancies = req.body.vacancies
        const pastprojects = req.body.pastprojects
        const feedback = req.body.feedback
        const age = req.body.age
    
        const schema = {
            name: Joi.tring().min(3).required(),
             email: Joi.string().email().required(),
             password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            partners:Joi.array().items(Joi.string(),Joi.number()),
            boardmembers:Joi.array().items(Joi.string(), Joi.number()),
            events:Joi.array().items(Joi.string(), Joi.number()),
            field:Joi.string(),
            vacancies:Joi.array().items(Joi.string(), Joi.number()),
            pastprojects:Joi.array().items(Joi.string(), Joi.number()),
            feedback:Joi.string(),
            age:Joi.number()
        }
    
        const result = Joi.validate(req.body, schema);
    
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    
        const newPartner= {
            name,
            email,
            password,
            partners,
            boardmembers,
            events,
            field,
            vacancies,
            pastprojects,
            feedback,
            age
        };
        Partners.push(newPartner)
        return res.json({ data: newPartner });
      
    });

    router.get(':id', (req, res) => {
        const partnerid = req.params.id
        const partner = Partners.find(partner => partner.id==partnerid)
        if(partner = undefined){
            res.send("this id is not correct")
        }
        else{
            res.send(Partners)
        }
    })


    router.put(':id', (req, res) => {
        const partnerid = req.params.id
        const p = p.find(p => p.id==partnerid)
        if(p = undefined){
            res.send("this id is not correct")
        }
        else{ 
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const partners = req.body.partners
        const boardmembers = req.body.boardmembers
        const events = req.body.events
        const field = req.body.field
        const vacancies = req.body.vacancies
        const pastprojects = req.body.pastprojects
        const feedback = req.body.feedback
        const age = req.body.age
    
        const schema = {
            name: Joi.tring().min(3).required(),
             email: Joi.string().email().required(),
             password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            partners:Joi.array().items(Joi.string(),Joi.number()),
            boardmembers:Joi.array().items(Joi.string(), Joi.number()),
            events:Joi.array().items(Joi.string(), Joi.number()),
            field:Joi.string(),
            vacancies:Joi.array().items(Joi.string(), Joi.number()),
            pastprojects:Joi.array().items(Joi.string(), Joi.number()),
            feedback:Joi.string(),
            age:Joi.number()
        }
    
        const result = Joi.validate(req.body, schema);
    
        if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    
        const newPartner= {
            p:name=name,
            p:email=email,
            p:password=password,
            p:partners=partners,
            p:boardmembers=boardmembers,
            p:events=events,
            p:field=field,
            p:vacancies=vacancies,
            p:pastprojects=pastprojects,
            p:feedback=feedback,
            p:age=age
        };
        partners.push(newPartner)
        return res.json({ data: newPartner });
      
    };
        
    })
router.get('/',(req,res) => res.json({ data: Vacancyarr }));
router.get('/:id',(req,res) =>{
    const vacID = req.params.id
    const vac = Vacancyarr.find(Vacancyarr => Vacancyarr.id===vacID)
    
    if(vac===undefined ){
        res.send("This id is incorrect")
    }
    else{
     const description= vac.description
     const duration=vac.duration
     const members=vac.members
     
     res.send(`Description: ${description}<br><br>Duration: ${duration}<br><br>Members: ${members}`)
    }
    }
)
    router.delete('/:id/:string', (req, res) => {
        const partnerid = req.params.id
        const partner = Partners.find(partner => partner.id==partnerid)
        if(partner = undefined){
            res.send("this id is not correct")
        }
        else{
                const delvacancy = req.param.string;  
const vacancydel = Partners.vacancies(delvacancy);
if(vacancydel = undefined){
    res.send("this vacancy is not there")
  
}
else{
    const index = Partners.vacancylist.indexOf(vacancydel)
    Partners.vacancylist.splice(index,1)
    res.send(Partners.vacancylist)


}    
        }})



module.exports = router
