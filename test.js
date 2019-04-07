
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
=======
const funcs = require('./fn');
const axios = require('axios');


//Salma amr, Event's CRUD testing

//Testing get an event
test('testing get request',async()=>{
 expect.assertions(1)
 const response = await funcs.getEvent()
 expect(response.data[0].eventName).toEqual('test event name10')
},
);

//Testing get all events
test ('testing get all events',async()=>{
  const before0 = await funcs.getEvent()
  expect(before0.data.length).toEqual(1)
});

//Testing update event
// test('testing event put request',async()=>{
//   const response = await funcs.updateEvent('5ca0f5fc20a34c3dfcd7d72e','new test20')
//   expect(response.data.eventDescription).toEqual('new test20')
//   },
//   );
 
// //Testing delete event
//  test('testing event delete',async()=>{
//    funcs.deleteEvent('5ca0f5fc20a34c3dfcd7d72e')
//    const response = await funcs.getEvent()
//    expect(response.data[0].eventName).not.toEqual('test event name')
//  },
//  );

//Testing create event
 test('testing event post',async()=>{
  const before =await funcs.getEvent()
  const m = funcs.postEvent()
  const after = await funcs.getEvent()
  expect (m).toBeDefined()
 },
 );
 //Testing member apply for an event
 test('testing event apply put request',async()=>{
  const response = await funcs.applyOnEvent('5ca0c819f792812168c302e0','5c9f6c3de7407b1ddc2b0ab6')
  expect(response.data.data.attendees[0]).toEqual('5ca0c819f792812168c302e0')
},
);
// //Testing partner create event
// test('testing event partner create put request',async()=>{
//   const response = await funcs.pcreateEvent('5ca0f7a134ede009c00c3f42','5ca0f5fc20a34c3dfcd7d72e')
//   expect(response.data.data.organizedBy).toEqual('5ca0f7a134ede009c00c3f42')
// },
// );
//Testing search event by location
test('testing search location event',async()=>{
  const response = await funcs.searchEventLocation('alexxxxxx')
  expect(response.data.data[0].eventLocation).toEqual('alexxxxxx')
  },
  );
// //Testing search event by date
// test('testing search date event',async()=>{
// const response = await funcs.searchEventDate('2019-01-08T22:00:00.000Z')
//  expect(response.data.data[0].eventDate).toEqual('2019-01-08T22:00:00.000Z')
// },
// );

 
 

