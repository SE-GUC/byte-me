const funcs2 = require('./partnerFn');
const axios = require('axios');


test ('partner login',async()=>{
    const before =await funcs2.getAllPartners()
    
      const exists = funcs2.loginPartner()
      expect (exists).toBeDefined()
}
)
test('testing delete partner',async()=>{
    const before = await funcs2.getPartner()
     funcs2.deletePartner('5ca1141b21356c2d388904e7')
     const after = await funcs2.getPartner()
     expect(before.data.length-1).toBe(after.data.length)
}
); 
test ('testing get all partners',async()=>{
    const list = await funcs2.getAllPartners()
    
    expect(list.data.length).toEqual(1)
}
);



test('post a partner',async()=>{
    const profile = funcs2.createPartner()
    expect (profile).toBeDefined() 
});



test('testing get applicants',async()=>{
    expect.assertions(1)
    
    const responseA = await funcs2.getApplicants('5c9fe3dbb77a711ce4eafa59')
    
    expect(responseA.data).toEqual([])
});

     
test('testing boardMembers search', async ()=>{
    const response = await funcs2.getPartnerBoardMembers('yara')
    expect(response.data[0].boardMembers[0]).toEqual('yara')
});
test('testing fieldOfWork search', async ()=>{
    const response = await funcs2.getFieldOfWork('entertainement')
    expect(response.data[0].fieldOfWork).toEqual('entertainement')
});
