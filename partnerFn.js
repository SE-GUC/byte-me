const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http')
const functions = {

    loginPartner: async () =>{
        return axios ({
            method:'post',
            url:'http://localhost:8000/api/partner/login',
            headers: {'Content-Type': 'application/json'},
            data:
            {
            
            email: 'gucmail',
            password: 'gucpassword100'
            }

        })
       
        
    },
    getAllPartners: async()=>{
        const partners = await axios.get('http://localhost:8000/api/partner/')

        return partners.data

    },
    
    createPartner: async () =>{
        return axios({
            method: 'post',
            url: 'http://localhost:8000/api/partner/',
            headers: {'Content-Type': 'application/json'},
            data:
            {
            organizationName: ' testing partner',
            email: 'omneya@yahoo.com',
            password: 'gffjuyfg',
            description: 'description of organization',
            partners: ['hgv','htdx'],
            boardMembers: ['yfcb','hfdsrt'],
            fieldOfWork: 'entertainment',
           
            
            
            }
        })
    },
    
    deletePartner: async (id) =>{
        const partner = await axios.delete('http://localhost:8000/api/partner/'+id,{})
        return partner
    },
    
     
     
     getApplicants: async (id) =>{
         const applicantsV= await axios.get('http://localhost:8000/api/partner/viewApplicants/'+id,{})
         return applicantsV.data
     },
     getPartnerBoardMembers: async (boardMembers) =>{  
        const partnersM = await axios.get('http://localhost:8000/api/partner/searchMembers/'+boardMembers,{boardMembers:
          boardMembers})
        return partnersM.data
    },
    getFieldOfWork: async (fieldOfWork) =>{  
        const partnersF = await axios.get('http://localhost:8000/api/partner/searchfieldOfWork/'+fieldOfWork,{fieldOfWork:
        fieldOfWork})
        return partnersF.data
    }, 
    getVacancies: async (id) =>{
        const vacancies= await axios.get('http://localhost:8000/api/partner/view/'+id,{})
        console.log(vacancies.data)
        return vacancies.data
    },
    updatePartner: async (id,par) =>{
        const partner = await axios.put('http://localhost:8000/api/partner/'+id,{partners:par})
        
        return partner.data
    },
    
};

    





module.exports = functions;