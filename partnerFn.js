const axios = require('axios');
const functions = {

    loginPartner: async () =>{
        return axios ({
            method:'post',
            url:'https://byte-me-se-project.herokuapp.com/api/partner/register'

        })
       
        
    },
    getPartner: async () =>{
        const partner = await axios.get('https://byte-me-se-project.herokuapp.com/api/partner/')
        return partner.data
    }, 
    createPartner: async () =>{
        return axios({
            method: 'post',
            url: 'https://byte-me-se-project.herokuapp.com/api/partner',
            headers: {'Content-Type': 'application/json'},
            data:
            {
            organizationName: ' testing partner',
            email: 'omneya@yahoo.com',
            password: 'gffjuyfg',
            description: 'gffdfui hfgh',
            partners: ['hgv','htdx'],
            boardMembers: ['yfcb','hfdsrt'],
            eventID: [1,7,9],
            fieldOfWork: 'entertainment',
            vacancyID: [3,8,9],
            
            }
        })
    },
    updatePartner: async (id) =>{
        const partners = await axios.put('https://byte-me-se-project.herokuapp.com/api/partner/'+id)
        return partners
    },
    deletePartner: async () =>{
        const partner = await axios.delete('https://byte-me-se-project.herokuapp.com/api/partner')
        return partner
    },
    
        
       
};
module.exports = functions;