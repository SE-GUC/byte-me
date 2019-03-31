const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {
    
    getcoworking: async () =>{  
        const coworkinggetter = await axios.get('http://localhost:3000/api/coworking')
        return coworkinggetter.data
    }, 
    updatecoworking: async (id) =>{
        const coworkingupdate = await axios.put('http://localhost:3000/api/coworking'+id)
            return coworkingupdate.data
    },
    deletecoworking: async (id) =>{
        const coworkingdelete = await axios.delete('http://localhost:3000/api/coworking/'+id,{})
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