const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {
<<<<<<< HEAD:coworkingfn.js
    
    getcoworking: async () =>{  
        const coworkinggetter = await axios.get('http://localhost:3000/api/coworking/get')
=======
    postRoom: async (id) =>{  
        return axios({
            method:'post',
            url:'http://localhost:3000/api/coworking/'+id+'/room',
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
        const edit = await axios.put('http://localhost:3000/api/coworking/'+id1+'/room/'+id2,{rate: rateN})
        return edit
    },
    deleteRoom: async(id1,id2,rateN) => {
        const del = await axios.delete('http://localhost:3000/api/coworking/'+id1+'/room/'+id2,{rate: rateN})
        return del.data
    },
    newSchedule: async (id1,id2) =>{
        return axios({
            method:'post',
            url:'http://localhost:3000/api/coworking/'+id1+'/room/'+id2+'/schedule',
            headers:{'Content-Type':'application/json'},
            data:{
                date:"21/11/2019 From 9:00 PM TO 12:00 PM"
            }
        })
    },
    editSchedule: async (id1,id2,id3,dateD) =>{
        const editS = await axios.put('http://localhost:3000/api/coworking/'+id1+'/room/'+id2+'/schedule'+id3,{date:dateD})
        return editS.data
    } ,
    reserve: async (id1,id2,id3,id4) =>{
        const res = await axios.put('http://localhost:3000/api/coworking/'+id1+'/room/'+id2+'/schedule'+id3+'reserve'+id4,{reserve: true})
        return res.data
    } ,
    register: async () =>{
        return axios({
            method:'post',
            url:'http://localhost:3000/api/coworking/register',
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
    } ,

    login: async () =>{
        return axios({
            method:'post',
            url:'http://localhost:3000/api/coworking/login',
            headers:{'Content-Type':'application/json'},
            data:{
               email: "knadskjasdnasjkdn@gfd.com",
               password: "$2a$10$G0g82V6QYdVDFMy7uECEZOsFrDtz0bEIS/iu4mpCzAm25i01NtwCG"
            }
        })
    } ,


    getcoworking: async()=>{  
        const coworkinggetter = await axios.get('http://localhost:3000/api/coworking')
>>>>>>> 09eb42fd7fea70f1b95a642870808c6b1f004e34:tests/coworkingfn.js
        return coworkinggetter.data
    }, 
    updatecoworking: async (id) =>{
        const coworkingupdate = await axios.put('http://localhost:3000/api/coworking'+id)
            return coworkingupdate.data
    },
    deletecoworking: async (id) =>{
        const coworkingdelete = await axios.delete('http://localhost:3000/api/coworking/'+id)
        return coworkingdelete
    },

    getcoworkinglocation : async(location)=>{
        const getl =await axios.get('http://localhost:3000/api/coworking/'+location,{location: location})
        return getl.data


    },
    
    getspecificcoworking: async(id)=>{
        const gets =await axios.get('http://localhost:3000/api/coworking/'+id,{id:id})
        return gets.data


    },

    getcoworkingname: async (name) =>{  
        const coworkingname = await axios.get('http://localhost:3000/api/coworking/'+name)
        return coworkingname.data
},
}
module.exports = functions
