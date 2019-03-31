const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
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
    searchVacancyStartDate: async (startDate) =>{
        const vacancyl = await axios.get('http://localhost:3000/api/vacancy/searchstartDate/'+startDate,{})
        console.log(vacancyl.data)
        return vacancyl
    } ,
    searchVacancyEndDate: async (endDate) =>{
        const vacancyl = await axios.get('http://localhost:3000/api/vacancy/searchendDate/'+endDate,{})
        console.log(vacancyl.data)
        return vacancyl
    } ,
    
    
};
module.exports = functions;
