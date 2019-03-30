const funcs = require('./partnerFn');
const axios = require('axios');

TextTrackList('testing get partners', async() =>{
    expect.assertions(1)
    const response= await funcs.getPartner
    
}
)