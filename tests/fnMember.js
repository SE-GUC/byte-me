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
    getMemberFirstName: async (firstName) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchfirstname/'+firstName)
        return membersg.data
    },  
    getMemberLastName: async (lastName) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchlastName/'+lastName,{lastName: lastName})
        return membersg.data
    },  
    getMemberEmail: async (email) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchemail/'+email,{email: email})
        return membersg.data
    },  
    getMemberAge: async (age) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchage/'+age,{age: age})
        return membersg.data
    },  
    getMemberSkills: async (skills) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchskills/'+skills,{skills: skills})
        return membersg.data
    },  
    getMemberInterests: async (interests) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchinterests/'+interests,{interests: interests})
        return membersg.data
    },  
    getMemberWorkCompleted: async (workcompleted) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchworkcompleted/'+workcompleted,{workcompleted: workcompleted})
        return membersg.data
    },
    getMemberReviews: async (reviews) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchreviews/'+reviews,{reviews: reviews})
        return membersg.data
    }, 
    getMemberStatus: async (status) =>{  
        const membersg = await axios.get('http://localhost:3000/api/member/searchstatus/'+status,{status: status})
        return membersg.data
    },
    getRecommended: async(id) =>{
        const all = await axios.get('https://localhost:3000/api/member/viewRecommendedVacancies'+id,{})
        return all.data
    }   
}

module.exports = functions