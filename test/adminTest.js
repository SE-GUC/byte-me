const funcs = require('./fn');
const axios = require('axios');

//Testing get all admins
test('testing get all admins',async()=>{
    const before0 = await funcs.getAdmin()
    console.log(before0.data.length)
    expect(before0.data.length).toEqual(2)
  });

  //Testing update admin
test('testing admin put request',async()=>{
    const response = await funcs.updateAdmin('5c9e37891c9d440000a70ff6','189238392484')
    expect(response.data.password).toEqual('189238392484')
    },
    );

//Testing delete admin
test('testing delete admin',async()=>{
    const before = await funcs.getAdmin()
    funcs.deleteAdmin('5c9e37891c9d440000a70ff6')
    const after = await funcs.getAdmin()
    expect(before.data.length-1).toEqual(after.data.length) 
  },
  );
 