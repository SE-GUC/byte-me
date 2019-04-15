const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {
    
    //Admin functions
    getAdmin: async () =>{  
        const admin = await axios.get('http://localhost:4000/api/admin')
        return admin.data
    }, 
    
    updateAdmin: async(id,password) => {
        const m = await
        axios.put('http://localhost:4000/api/admin/update/'+id,{'password':password})
        console.log(m.data)
        return m.data
    },
        
    deleteAdmin: async (id) =>{
         const adminsd = await axios.delete('http://localhost:4000/api/admin/'+id,{})
         return adminsd
    },

    //Partner functions
    loginPartner: async () =>{
        return axios ({
            method:'post',
            url:'http://localhost:4000/api/partner/login',
            headers: {'Content-Type': 'application/json'},
            data:
            {
                email: 'gucmail',
                password: 'gucpassword100'
            }
        }) 
    },

    getAllPartners: async()=>{
        const partners = await axios.get('http://localhost:4000/api/partner/')
        return partners.data
    },

    createPartner: async () =>{
        return axios({
            method: 'post',
            url: 'http://localhost:8000/api/partner/',
            headers: {'Content-Type': 'application/json'},
            data:
            {
                organizationName: ' testing partner',
                email: 'omneya@yahoo.com',
                password: 'gffjuyfg',
                description: 'description of organization',
                partners: ['hgv','htdx'],
                boardMembers: ['yfcb','hfdsrt'],
                fieldOfWork: 'entertainment',
                expiryDate: 'fifteen december',
                contractTime: 'monday the 3rd on 3 pm',
                contractLocation: 'masr el gedida'
            }
        })
    },
    
    deletePartner: async (id) =>{
        const partner = await axios.delete('http://localhost:4000/api/partner/'+id,{})
        return partner
    },
     
    getApplicants: async (id) =>{
        const applicantsV= await axios.get('http://localhost:4000/api/partner/viewApplicants/'+id,{})
        return applicantsV.data
    },

    getPartnerBoardMembers: async (boardMembers) =>{  
        const partnersM = await axios.get('http://localhost:4000/api/partner/searchMembers/'+boardMembers,{boardMembers:
        boardMembers})
        return partnersM.data
    },

    getFieldOfWork: async (fieldOfWork) =>{  
        const partnersF = await axios.get('http://localhost:4000/api/partner/searchfieldOfWork/'+fieldOfWork,{fieldOfWork:
        fieldOfWork})
        return partnersF.data
    },
    
    //Event Functions
    getEvent: async () =>{  
        const eventsg = await axios.get('http://localhost:4000/api/event')
        return eventsg.data
    },

    updateEvent: async(id,desc) => {
        const m = await
        axios.put('http://localhost:4000/api/event/update/'+id,{eventDescription:desc})
        console.log(m.data)
        return m.data
    },

    deleteEvent: async (id) =>{
        const eventsd = await axios.delete('http://localhost:4000/api/event/delete/'+id,{})
        return eventsd
    },

    applyOnEvent: async (id1,id2) =>{
        const vacancyd = await axios.put('http://localhost:4000/api/event/applyevent/'+id1+'/'+id2,{})
        //console.log(vacancyd.data)
        return vacancyd
    },

    pcreateEvent: async (id1,id2) =>{
        const vacancyd = await axios.put('http://localhost:4000/api/event/pcreateevent/'+id1+'/'+id2,{})
        console.log(vacancyd)
        return vacancyd
    },

    searchEventLocation: async (eventLocation) =>{
        const vacancyl = await axios.get('http://localhost:4000/api/event/searcheventLocation/'+eventLocation,{})
        //console.log(vacancyl.data)
        return vacancyl
    },

    searchEventDate: async (eventDate) =>{
        const vacancyl = await axios.get('http://localhost:4000/api/event/searcheventDate/'+eventDate,{})
        //console.log(vacancyl.data)
        return vacancyl
    },

    postEvent : async () =>{
        return axios({
            method:'post',
            url:'localhost:4000/api/event/create/5ca0f7a134ede009c00c3f42',
            headers:{'Content-Type':'application/json'},
            data:{
                type:"Testing Post",
                eventName:"eventest",
                eventDescription:"eventdescription",
                eventLocation: "eventlocation",
                eventDuration:"eventduration",
                eventDate:"eventdate",
                //attendees : ["salma"],
                //organizedBy :"rana"
            }
        })
    },
    
    //getEventdesc: async(id)=>{
        //const gete =await axios.get('http://localhost:4000/api/event/'+id,{})
        //console.log(gete.data.data)
        //return gete.data
    //}

    //Vacancy functions
    getVacancy: async () =>{  
        const vacancyg = await axios.get('http://localhost:4000/api/vacancy')
        return vacancyg.data
    },

    updateVacancy: async (id,desc) =>{
        const vacancyu = await axios.put('http://localhost:4000/api/vacancy/update/'+id,{duration:desc})
        console.log(vacancyu.data)
        return vacancyu.data
    },

    deleteVacancy: async (id) =>{
        const vacancyd = await axios.delete('http://localhost:4000/api/vacancy/delete/'+id,{})
        return vacancyd
    },

    ApplyOnVacancy: async (id1,id2) =>{
        const vacancyd = await axios.put('http://localhost:4000/api/vacancy/apply/'+id1+'/'+id2,{})
        //console.log(vacancyd.data)
        return vacancyd
    },

    searchVacancyLocation: async (location) =>{
        const vacancyl = await axios.get('http://localhost:4000/api/vacancy/searchlocation/'+location,{})
        //console.log(vacancyl.data)
        return vacancyl
    },

    searchVacancyDuration: async (duration) =>{
        const vacancyl = await axios.get('http://localhost:4000/api/vacancy/searchduration/'+duration,{})
        // console.log(vacancyl.data)
        return vacancyl
    },

    searchVacancyStartDate: async (startDate) =>{
        const vacancyl = await axios.get('http://localhost:4000/api/vacancy/searchstartDate/'+startDate,{})
        // console.log(vacancyl.data)
        return vacancyl
    },

    searchVacancyEndDate: async (endDate) =>{
        const vacancyl = await axios.get('http://localhost:4000/api/vacancy/searchendDate/'+endDate,{})
        // console.log(vacancyl.data)
        return vacancyl
    },
    
    postVacancy : async () =>{
        return axios({
            method:'post',
            url:'localhost:4000/api/vacancy/create/5ca0f7a134ede009c00c3f42',
            headers:{'Content-Type':'application/json'},
            data:{
                description:"desc",
                duration : "8 hours",
                location : "zamalek",
                monthlyWage :  5,
                startDate: "2019-01-04",
                dailyHours : 9,
                endDate : "2019-01-05"
            }
        })
    },

    //Coworking function
    postRoom: async (id) =>{  
        return axios({
            method:'post',
            url:'http://localhost:4000/api/coworking/'+id+'/room',
            headers:{'Content-Type':'application/json'},
            data:{
                roomNo: 5,
                rate: 3000,
                capacity: 850,
                reservation: [
                    {date:"15/11/2019 From 5:00 PM TO 12:00 PM"},
                    {date:"16/11/2019 From 5:00 PM TO 12:00 PM"},
                    {date:"16/11/2019 From 5:00 PM TO 8:00 PM"}
                ]
            }
        })
    }, 

    editRoom: async(id1,id2,rateN) => {
        const edit = await axios.put('http://localhost:4000/api/coworking/'+id1+'/room/'+id2,{rate: rateN})
        return edit
    },

    deleteRoom: async(id1,id2,rateN) => {
        const del = await axios.delete('http://localhost:4000/api/coworking/'+id1+'/room/'+id2,{rate: rateN})
        return del.data
    },

    newSchedule: async (id1,id2) =>{
        return axios({
            method:'post',
            url:'http://localhost:4000/api/coworking/'+id1+'/room/'+id2+'/schedule',
            headers:{'Content-Type':'application/json'},
            data:{
                date:"21/11/2019 From 9:00 PM TO 12:00 PM"
            }
        })
    },

    editSchedule: async (id1,id2,id3,dateD) =>{
        const editS = await axios.put('http://localhost:4000/api/coworking/'+id1+'/room/'+id2+'/schedule'+id3,{date:dateD})
        return editS.data
    },

    reserve: async (id1,id2,id3,id4) =>{
        const res = await axios.put('http://localhost:4000/api/coworking/'+id1+'/room/'+id2+'/schedule'+id3+'reserve'+id4,{reserve: true})
        return res.data
    },

    registerCO: async () =>{
        return axios({
            method:'post',
            url:'http://localhost:4000/api/coworking/register',
            headers:{'Content-Type':'application/json'},
            data:{
                name: "QQQQQQ",
                email: "AAAAAAA@QQQQQ.QQQQ",
                password: "jkndkfsndf1121",
                facilities: ["QQQ","WWW"],
                businessPlan: "dassdasdasdsad",
                location: "dfsfsdfds",
                rooms: [{
                    roomNo: 5,
                    rate: 7000,
                    capacity:1800,
                    reservation:[
                        {date:"15/11/2019 From 5:00 PM TO 12:00 PM"},
                        {date:"16/11/2019 From 5:00 PM TO 12:00 PM"},
                        {date:"16/11/2019 From 5:00 PM TO 1:00 PM"}
                    ]
                },
                {
                    roomNo: 13,
                    rate: 110,
                    capacity:140,
                    reservation:[
                        {date:"10/11/2019 From 5:00 PM TO 12:00 PM"},
                        {date:"16/11/2019 From 5:00 PM TO 12:00 PM"},
                        {date:"16/11/2019 From 5:00 PM TO 1:00 PM"}
                    ]
                }]
            }
        })
    },

    loginCO: async () =>{
        return axios({
            method:'post',
            url:'http://localhost:4000/api/coworking/login',
            headers:{'Content-Type':'application/json'},
            data:{
               email: "knadskjasdnasjkdn@gfd.com",
               password: "$2a$10$G0g82V6QYdVDFMy7uECEZOsFrDtz0bEIS/iu4mpCzAm25i01NtwCG"
            }
        })
    },

    getcoworking: async()=>{  
        const coworkinggetter = await axios.get('http://localhost:4000/api/coworking')
        return coworkinggetter.data
    }, 

    updatecoworking: async (id) =>{
        const coworkingupdate = await axios.put('http://localhost:4000/api/coworking'+id)
            return coworkingupdate.data
    },

    deletecoworking: async (id) =>{
        const coworkingdelete = await axios.delete('http://localhost:4000/api/coworking/'+id)
        return coworkingdelete
    },

    getcoworkinglocation : async(location)=>{
        const getl =await axios.get('http://localhost:4000/api/coworking/'+location,{location: location})
        return getl.data
    },
    
    getspecificcoworking: async(id)=>{
        const gets =await axios.get('http://localhost:4000/api/coworking/'+id,{id:id})
        return gets.data
    },

    getcoworkingname: async (name) =>{  
        const coworkingname = await axios.get('http://localhost:4000/api/coworking/'+name)
        return coworkingname.data
    },

    //Member functions
    createMember: async () =>{
        return axios({
            method:'post',
            url:'localhost:4000/api/member',
            headers:{'Content-Type':'application/json'},
            data:{
                firstName:"firstname",
                lastName:"lastname",
                email:"adfds@ggg.com",
                dateOfBirth:"22",
                password:"khdvbsbjs"
            }
        })
    },

    getallmembers: async () =>{
        const all = axios.get('localhost:4000/api/member')
        return all.data
    },

    deleteMember: async (id) =>{
        const membersd = await axios.delete('http://localhost:4000/api/member/'+id,{})
        return membersd
    },

    updateMember: async (id,tskills)=>{
        const updatedMember = await axios.put('http://localhost:4000/api/member/'+id,{skills:tskills})
        return updatedMember.data
    },

    getMember: async () =>{  
        const membersg = await axios.get('http://localhost:4000/api/member')
        return membersg.data
    },

    getMemberFirstName: async (firstName) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchfirstname/'+firstName)
        return membersg.data
    },  

    getMemberLastName: async (lastName) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchlastName/'+lastName,{lastName: lastName})
        return membersg.data
    }, 

    getMemberEmail: async (email) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchemail/'+email,{email: email})
        return membersg.data
    },

    getMemberAge: async (age) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchage/'+age,{age: age})
        return membersg.data
    },

    getMemberSkills: async (skills) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchskills/'+skills,{skills: skills})
        return membersg.data
    },  

    getMemberInterests: async (interests) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchinterests/'+interests,{interests: interests})
        return membersg.data
    },  

    getMemberWorkCompleted: async (workcompleted) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchworkcompleted/'+workcompleted,{workcompleted: workcompleted})
        return membersg.data
    },

    getMemberReviews: async (reviews) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchreviews/'+reviews,{reviews: reviews})
        return membersg.data
    }, 

    getMemberStatus: async (status) =>{  
        const membersg = await axios.get('http://localhost:4000/api/member/searchstatus/'+status,{status: status})
        return membersg.data
    },

    getRecommended: async(id) =>{
        const all = await axios.get('https://localhost:4000/api/member/viewRecommendedVacancies'+id,{})
        return all.data
    }   
};

module.exports = functions;