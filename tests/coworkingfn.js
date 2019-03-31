const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {
    getcoworking: async () =>{  
        const coworkinggetter = await axios.get('http://localhost:3000/api/coworking')
        return coworkinggetter.data
    }, 
    updatecoworking: async (id,desc) =>{
        const coworkingupdate = await axios.put('http://localhost:3000/api/coworking/update/'+id,{coworkingDescription:desc})
        console.log(coworkingupdate)
        return coworkingupdate
    },
    deletecoworking: async (id) =>{
        const coworkingdelete = await axios.delete('http://localhost:3000/api/coworking/delete/'+id,{})
        return coworkingdelete
    }   ,
    postcoworking : async () =>{
        return axios({
            method:'post',
            url:'localhost:3000/api/coworking/create',
            headers:{'Content-Type':'application/json'},
            data:{
                type:"Testing Post",
                coworkingName:"coworkingtest",
                coworkingDescription:"coworkingdescription",
                coworkingLocation: "coworkinglocation",
                coworkingDuration:"coworkingduration",
                coworkingDate:"coworkingdate",
               
            }
        })
    },
    
    getcoworkingdesc: async(id)=>{
        const gete =await axios.get('http://localhost:3000/api/coworking/'+id,{})
        console.log(gete.data.data)
        return gete.data


    }
};
module.exports = functions;