const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const Member = require('../api/Member')

const users = [
    new Member("Ahmad Elkilany","20",["playing football","drawing"],["watch tv","play fifa","go to gym"],["Masterclass in js","certificate in java"]
    ,[{evnt:"conference",date:"1-1-2019",location:"qa3et elmo2tamarat"},{evnt:"lecture",date:"23-7-2017",location:"h12"}],[{task:"dbProj",date:"20/9-23/12"},{task:"dsdProj",date:"12/11-30/11"}],
    [{by:"Doctor",content:"Great job",date:"6/3"},{by:"TA",content:"malla project",date:"12/2"}],"mymail","cds000"),
    new Member("Eden Hazard","27",["playing football","drawing"],["watch tv","play fifa","go to gym"],["Masterclass in js","certificate in java"]
    ,[{evnt:"conference",date:"1-1-2019",location:"qa3et elmo2tamarat"},{evnt:"lecture",date:"23-7-2017",location:"h12"}],[{task:"dbProj",date:"20/9-23/12"},{task:"dsdProj",date:"12/11-30/11"}],
    [{by:"Doctor",content:"Great job",date:"6/3"},{by:"TA",content:"malla project",date:"12/2"}],"asec@","cdadcdff0933")
]

router.get('/', (req, res) => res.json({ data: users }));

router.get('/:id',(req,res) =>{ //As a member, I can view my profile information
    const memID = req.params.id
    const mem = users.find(member => member.id===memID)
    if(mem===undefined ){
        res.send("This id is incorrect")
    }
    else{
        const name = mem.name
        const age = mem.age
        const skills = mem.skills
        var allskills = "<ul>"
        for(const sk of skills){
            allskills+=`<li>${sk}</li>`
        }
        allskills+="</ul>"
        const als = allskills
        const interests = mem.interests
        var allinterests = "<ul>"
        for(const inn of interests){
            allinterests+=`<li>${inn}</li>`
        }
        allinterests+="</ul>"
        const alin = allinterests
        const past_events = mem.events
        var pasts = "<ul>"
        for(const e of past_events){
            pasts+=`<li>Event: ${e.evnt}, Date: ${e.date}, Location: ${e.location}`
        }
        pasts+="</ul>"
        const pes = pasts
        const proj_tasks = mem.projects
        var projtas = "<ul>"
        for(const pt of proj_tasks){
            projtas+=`<li>Task/Project: ${pt.task}, Date: ${pt.date}`
        }
        projtas+="</ul>"
        const pts = projtas
        const reviews = mem.reviews
        var revws = "<ul>"
        for(const r of reviews){
            revws+=`<li>Received by: ${r.by}, Review Content: ${r.content}, Review Date: ${r.date}`
        }
        revws+="</ul>"
        const revs = revws
        const certificates_masterclasses = mem.certificates
        var cermasts = "<ul>"
        for(const cm of certificates_masterclasses){
            cermasts+=`<li>${cm}</li>`
        }
        cermasts+="</ul>"
        const cms = cermasts
        const mail = mem.email
        res.send(`Name: ${name}<br><br>Age: ${age}<br><br>Skills: ${als}Interests: ${alin}
        Past Events: ${pes}Projects/Tasks completed: ${pts}Reviews Received: ${revs}
        Certificates/Masterclasses Held: ${cms}E-Mail: ${mail}
        `)
    }
})

module.exports = router

//---------------------------------------- Member deletes their profile//---
router.delete('/:id',(req,res) => {
    const memberId = req.params.id
    const deletedMember = Member.find(deletedMember => Member.id == memberId)
    if ( deletedMember === undefined)
    {
        res.send('this id is not correct')
    }
        
    else{
        const index = Member.indexOf(deletedMember)
        Member.splice(index,1)
        res.send(Member)
    }
})