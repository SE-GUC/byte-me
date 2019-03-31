const funcs = require('./fn');
const axios = require('axios');

test('testing get request',async()=>{
 expect.assertions(1)
 const response = await funcs.getcoworking()
 expect(response.data[0].coworkingName).toEqual('test coworking name3')
},
);
test('testing coworking delete',async()=>{
   funcs.deletecoworking('999999')
   const response = await funcs.getcoworking()
   expect(response.data[0].eventName).not.toEqual('test coworking name')
 },
 ); 
 



