const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
//http://localhost:3000/api/vacancy
const functions = {
    getVacancy: async () =>{  
        const vacancyg = await axios.get('http://localhost:3000/api/vacancy')
        return vacancyg.data
    }, 
    updateVacancy: async (id,desc) =>{
        const vacancyu = await axios.put('http://localhost:3000/api/vacancy/update/'+id,{duration:desc})
        console.log(vacancyu.data)
        return vacancyu.data
    },
    deleteVacancy: async (id) =>{
        const vacancyd = await axios.delete('http://localhost:3000/api/vacancy/delete/'+id,{})
        return vacancyd
    }   ,
    ApplyOnVacancy: async (id1,id2) =>{
        const vacancyd = await axios.put('http://localhost:3000/api/vacancy/apply/'+id1+'/'+id2,{})
        //console.log(vacancyd.data)
        return vacancyd
    } ,
    searchVacancyLocation: async (location) =>{
        const vacancyl = await axios.get('http://localhost:3000/api/vacancy/searchlocation/'+location,{})
        //console.log(vacancyl.data)
        return vacancyl
    } ,
    searchVacancyDuration: async (duration) =>{
        const vacancyl = await axios.get('http://localhost:3000/api/vacancy/searchduration/'+duration,{})
       // console.log(vacancyl.data)
        return vacancyl
    } ,
    
    postVacancy : async () =>{
        return axios({
            method:'post',
            url:'localhost:3000/api/vacancy/create/5ca0f7a134ede009c00c3f42',
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
    }
    
};
 //functions.searchVacancy('cairo')
module.exports = functions;
