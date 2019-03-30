const funcs = require('./fn');
const axios = require('axios');


//Salma amr, Event's CRUD testing

test('testing get request',async()=>{
 expect.assertions(1)
 const response = await funcs.getEvent()
 expect(response.data[0].name).toEqual('test event name')
},
);
test('testing event put request',async()=>{
  const desc ='test update desc'
  const response = await funcs.updateEvent('5c9f2d78fd957c0c8441a646',desc)
  expect(response.data.data.eventDescription).toEqual(desc)
 },
 );
 test('testing event delete',async()=>{
   const before =await funcs.getEvent()
   fn.deleteEvent('5c9f2d78fd957c0c8441a646')
   const after = await funcs.getEvent()
   expect (before.data.length-1).toBe(after.data.length)
 },
 );
 test('testing event post',async()=>{
  const before =await funcs.getEvent()
  fn.postEvent()
  const after = await funcs.getEvent()
  expect (before.data.length+1).toBe(after.data.length)
 },
 );
 test('testing viewing event desc',async()=>{
   const desc='Testing view event'
   const m = await funcs.getEventdesc('5c9f2d78fd957c0c8441a646')
   expect(m.data).toEqual(desc)
 },
 );
 
 
 

