const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {
    getAdmin: async () =>{  
        const admin = await axios.get('http://localhost:3000/api/admin')
        return admin.data
    }, 
    
    updateAdmin: async(id,password) => {
        const m = await
        axios.put('http://localhost:3000/api/admin/update/'+id,{'password':password})
        console.log(m.data)
        return m.data
        },
        
    deleteAdmin: async (id) =>{
         const adminsd = await axios.delete('http://localhost:3000/api/admin/'+id,{})
         return adminsd
        },

    };

  module.exports = functions;
 
