

const funcs2 = require('./partnerFn');
const axios = require('axios');
// const funcs = require('./coworkingfn')
// test('testing coworking update', async ()=>{
//     const response = await funcs.updatecoworking('5ca1256430ad6d49b447d4f7','youssefzidan2010@gmail.com')
//     expect(response.data.email.sort()).toEqual('youssefzidan2010@gmail.com'.sort())
// });
//  test('testing coworking delete',async()=>{
//      const before = await funcs.getcoworking()
//      funcs.deletecoworking('5ca1256430ad6d49b447d4f7')
//      const after = await funcs.getcoworking()
//      expect(before.data.length-1).toBe(after.data.length)
//  });
// test('testing coworking get',async()=>{
//     const response = await funcs.getcoworking()
//     expect(response.data[0].name).toEqual('zidan')
// });
// test('testing name search', async ()=>{
//     const response = await funcs.getcoworkingname('zidan')
//     expect(response.data[0].name).toEqual('zidan')
// });
// test('testing location search ', async ()=>{
//     const response = await funcs.getcoworkinglocation('hoballa')
//     expect(response.data[0].location).toEqual('hoballa')
// });
// test('testing specific coworking ', async ()=>{
//     const response = await funcs.getspecificcoworking('hoba')
//     const x = respone.data[0]
//     console.log(x)
//     expect(response.data[0].name).toEqual('hoba')
// });


// test('Register', async () =>{
//     const registered = funcs.register()
//     expect(registered).toBeDefined()
// });

// test('New Room', async ()=>{
//     const response = await funcs.postRoom('5ca1256430ad6d49b447d4f7')
//     expect(response).toBeDefined()
// });
// test('Edit Room', async ()=>{
//     const response = await funcs.editRoom('5ca1256430ad6d49b447d4f7','5ca1262afe22c22a64bbf35d', 500000)
//     expect(response.data[0].sort()).toEqual(50000)
// });
// test('Delete Room', async ()=> {
//     const response = await funcs.deleteRoom('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e')
//    expect(response.data._id).toBe('5ca0e179df45b53e1c4fbd4e')
// });
// test('New Schedule', async ()=>{
//     const response = await funcs.newSchedule('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e')
//     expect(response).toBeDefined()
// });
// test('Edit Schedule', async ()=>{
//     const response = await funcs.editSchedule('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e','5ca0e179df45b53e1c4fbd51',"18/11/2005 From 7:00PM to 8:00 PM ")
//     expect(response.data.rate.sort()).toEqual("18/11/2005 From 7:00PM to 8:00 PM ")
// });
// test('Reserve', async ()=>{
//     const response = await funcs.reserve('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e','5ca0e179df45b53e1c4fbd51',"5ca1141b21356c2d388904e7")
//     expect(response.data.reserve.sort()).toEqual(true)
// });
// test('Login', async () =>{
//     const login = funcs.login()
//     expect(login).toBeDefined()
// });





/* test ('partner login',async()=>{
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
); */



test('post a partner',async()=>{
    const profile = funcs2.createPartner()
    expect (profile).toBeDefined() 
});


/* 

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
    expect(response.data[0].fieldOfWork).toEqual('entertainement')*/

