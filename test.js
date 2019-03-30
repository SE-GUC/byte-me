const funcs = require('./fn');
const axios = require('axios');


//Salma amr, Event's CRUD testing

test('testing get request',async()=>{
 expect.assertions(1)
 const response = await funcs.getEvent()
 expect(response.data[0].eventName).toEqual('test event name3')
},
);
// test('testing event put request',async()=>{
//   const eventDescription ='new event'
//   const id = '5c9f5572e0c8483a2cfff1c6'
//   const response = await funcs.updateEvent(id,eventDescription)
//   expect(response.data.eventDescription).toEqual(eventDescription)
//  },
//  );
 test('testing event delete',async()=>{
   funcs.deleteEvent('5c9f4edbc7c4722d1cc18499')
   const response = await funcs.getEvent()
   expect(response.data[0].eventName).not.toEqual('test event name')
 },
 );

// test('testing event post',async()=>{
//   const response = await funcs.postEvent();
//   expect(response.data.length).toBe(4);
// });


//  test('testing event post',async()=>{
//   const before =await funcs.getEvent()
//   funcs.postEvent()
//   const after = await funcs.getEvent()
//   expect (before.data.length+1).toBe(after.data.length)
//  },
//  );
//  test('testing viewing event desc',async()=>{
//    const desc='test event name3'
//    const m = await funcs.getEventdesc('5c9f4edbc7c4722d1cc18499')
//    expect(m.data.data.eventName).toBe(desc)
//  },
//  );
 
 
 

