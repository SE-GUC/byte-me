const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {
    getEvent: async () =>{  
        const eventsg = await axios.get('http://localhost:8000/api/event')
        return eventsg.data
    }, 
    updateEvent: async(id,desc) => {
        const m = await
        axios.put('http://localhost:8000/api/event/update/'+id,{eventDescription:desc})
        console.log(m.data)
        return m.data
        },
    deleteEvent: async (id) =>{
        const eventsd = await axios.delete('http://localhost:8000/api/event/delete/'+id,{})
        return eventsd
    }   ,
    applyOnEvent: async (id1,id2) =>{
        const vacancyd = await axios.put('http://localhost:8000/api/event/applyevent/'+id1+'/'+id2,{})
        //console.log(vacancyd.data)
        return vacancyd
    } ,
    pcreateEvent: async (id1,id2) =>{
        const vacancyd = await axios.put('http://localhost:8000/api/event/pcreateevent/'+id1+'/'+id2,{})
        console.log(vacancyd)
        return vacancyd
    } ,
    searchEventLocation: async (eventLocation) =>{
        const vacancyl = await axios.get('http://localhost:8000/api/event/searcheventLocation/'+eventLocation,{})
        //console.log(vacancyl.data)
        return vacancyl
    } ,

    searchEventDate: async (eventDate) =>{
        const vacancyl = await axios.get('http://localhost:8000/api/event/searcheventDate/'+eventDate,{})
       //console.log(vacancyl.data)
        return vacancyl
    } ,
    postEvent : async () =>{
        return axios({
            method:'post',
            url:'localhost:8000/api/event/create',
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
    
//     getEventdesc: async(id)=>{
//         const gete =await axios.get('http://localhost:8000/api/event/'+id,{})
//         console.log(gete.data.data)
//         return gete.data


//     }
 };


module.exports = functions;