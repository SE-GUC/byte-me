const express = require('express')
const app = express()
app.use(express.json())

app.get('/',(req,res) => {
    res.send(`<h1>Welcome!</h1>`)
})

const member = require('D:/GUC/Software Engineering/mystories/member')
const User = require('D:/GUC/Software Engineering/mystories/User')
const Admin = require('D:/GUC/Software Engineering/mystories/Admin')

const users = [
    new member("Ahmad Elkilany","20",["playing football","drawing"],["watch tv","play fifa","go to gym"],["Masterclass in js","certificate in java"]
    ,[{evnt:"conference",date:"1-1-2019",location:"qa3et elmo2tamarat"},{evnt:"lecture",date:"23-7-2017",location:"h12"}],[{task:"dbProj",date:"20/9-23/12"},{task:"dsdProj",date:"12/11-30/11"}],
    [{by:"Doctor",content:"Great job",date:"6/3"},{by:"TA",content:"malla project",date:"12/2"}],"mymail","cds000"),
    new member("Eden Hazard","27",["playing football","drawing"],["watch tv","play fifa","go to gym"],["Masterclass in js","certificate in java"]
    ,[{evnt:"conference",date:"1-1-2019",location:"qa3et elmo2tamarat"},{evnt:"lecture",date:"23-7-2017",location:"h12"}],[{task:"dbProj",date:"20/9-23/12"},{task:"dsdProj",date:"12/11-30/11"}],
    [{by:"Doctor",content:"Great job",date:"6/3"},{by:"TA",content:"malla project",date:"12/2"}],"asec@","cdadcdff0933")
]

const calendar = [{day:"Sunday",state:"Booked"},{day:"Monday",state:"Free"},{day:"Tuesday",state:"Finally reserved"},
{day:"Wednesday",state:"Free"},{day:"Thursday",state:"Free"},{day:"Friday",state:"Free"},{day:"Saturday",state:"Free"}]

const admins = [new Admin("Ngolo","26","24/3/2008","ngl@gmail.com","skdcbhkdscdk"),
new Admin("Sarri","50","26/7/1990","lm@gmail.com","djfvnh")]

app.get('/api/member/:id',(req,res) =>{ //As a member, I can view my profile information
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

// app.get('/api/memberres',(req,res) => {
//     var all = "<ul>";
//     for(const x of calendar){
//         all+=`<li>Day:${x.day}, Booking State:${x.state}</li>`
//     }
//     all+="</ul>"
//     const fincal = all
//     res.send(fincal)
// })
app.get('/api/admin/:id',(req,res) => {
    const adid = req.params.id
   const adm = admins.find(admin => admin.id===adid)
   if(adm===undefined){
       res.send("This id is incorrect")
   }
   else{
       const name = adm.name
       const email = adm.email
       const age = adm.age
       const dateJoined = adm.dateJoined
       res.send(`Name: ${name}<br><br>E-Mail: ${email}<br><br>Age: ${age}<br><br>Date Joined: ${dateJoined}`)
   }
})

const port = 3000
app.listen(port,() => {console.log(`Server is running on server ${port}`)})