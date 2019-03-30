const axios = require('axios');
const functions = {
    getEvent: async () =>{  
        const eventsg = await axios.get('http://localhost:3000/api/events')
        return eventsg.data
    }, 
    updateEvent: async (id,desc) =>{
        const eventsu = await axios.put('http://localhost:3000/api/events'+id,{eventDescription:desc})
        return eventsu
    },
    deleteEvent: async (id) =>{
        const eventsd = await axios.delete('http://localhost:3000/api/events'+id,{})
        return eventsd
    },   
    postEvent : async () =>{
        return axios({
            method:'post',
            url:'localhost:3000/api/events',
            headers:{'Content-Type':'application/json'},
            data:{
                type:"Testing Post",
                eventName:"eventest",
                eventDescription:"eventdescription",
                eventLocation: "eventlocation",
                eventDuration:"eventduration",
                eventDate:"eventdate",
                attendees : ["salma"],
                organizedBy :"rana"
            }
        })
    },
    getEventdesc: async(id)=>{
        const gete =await axios.get('http://localhost:3000/api/events'+id)
        console.log(gete.data.data)
        return gete.data


    }
};
module.exports = functions;