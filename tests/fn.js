const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')

const functions = {
    createMember: async () =>{
        return axios({
            method:'post',
            url:'localhost:3000/api/member',
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
        const all = axios.get('localhost:3000/api/member')
        return all.data
    },
    deleteMember: async (id) =>{
        const membersd = await axios.delete('http://localhost:3000/api/member/'+id,{})
        return membersd
    },
    updateMember: async (id,tskills)=>{
        const updatedMember = await axios.put('http://localhost:3000/api/member/'+id,{skills:tskills})
        return updatedMember.data
    },
    getMember: async () =>{  
        const membersg = await axios.get('http://localhost:3000/api/member')
        return membersg.data
    }, 
    
}

module.exports = functions