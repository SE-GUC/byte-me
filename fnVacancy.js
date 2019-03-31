const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {
    getVacancy: async () =>{  
        const vacancyg = await axios.get('http://localhost:8000/api/vacancy')
        return vacancyg.data
    }, 
    updateVacancy: async (id,desc) =>{
        const vacancyu = await axios.put('http://localhost:8000/api/vacancy/update/'+id,{duration:desc})
        console.log(vacancyu.data)
        return vacancyu.data
    },
    deleteVacancy: async (id) =>{
        const vacancyd = await axios.delete('http://localhost:8000/api/vacancy/delete/'+id,{})
        return vacancyd
    }   ,
    // ApplyOnVacancy: async (id1,id2) =>{
    //     const vacancyd = await axios.put('http://localhost:8000/api/vacancy/apply'+id1 + id2,{})
    //     return vacancyd
    // }  ,
    postVacancy : async () =>{
        return axios({
            method:'post',
            url:'localhost:8000/api/vacancy/create',
            headers:{'Content-Type':'application/json'},
            data:{
                ownedBy:"5c9fe3dbb77a711ce4eafa59",
                description:"desc",
                duration : "8 hours",
                location : "zamalek",
                monthlyWage :  5,
                startDate: "2019-01-04",
                dailyHours : 9,
                endDate : "2019-01-05"
            }
        })
    }
    
};
module.exports = functions;
