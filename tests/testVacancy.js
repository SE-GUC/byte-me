const funcs = require('./fnVacancy');
const axios = require('axios');


test('testing vacancy put request',async()=>{
  const response = await funcs.updateVacancy('5c9ff01468d8473d10c906b4','new duration')
  expect(response.data.duration).toEqual('new duration')
},
);
test('testing get request vacancy',async()=>{
expect.assertions(1)
const response = await funcs.getVacancy()
expect(response.data[0].duration).toEqual('8 hours')
},
);

//  test('testing vacancy delete',async()=>{
//   const before = await funcs.getVacancy() 
//   funcs.deleteVacancy('5ca0034d43407c153c90628b')
//   const after = await funcs.getVacancy() 
//   expect(before.data.length-1).toBe(after.data.length) 
//  },
//  );
 test('testing vacancy post',async()=>{
  const before =await funcs.getVacancy()
  const m = funcs.postVacancy()
  const after = await funcs.getVacancy()
  expect (m).toBeDefined()
 },
 );
