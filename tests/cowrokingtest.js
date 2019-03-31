const funcs = require('./fn')

test('testing coworking creation', async () =>{
    const created = funcs.createcoworking()
    expect(created).toBeDefined()
});

test('testing coworking update', async ()=>{
    const response = await funcs.updatecoworking('5ca0c819f792812168c302e0',['ay','7aga','hey'])
    expect(response.data.skills.sort()).toEqual(['ay','7aga','hey'].sort())
});
 test('testing coworking delete',async()=>{
     const before = await funcs.getcoworking()
     funcs.deletecoworking('5ca0cebd315995284c1e2014')
     const after = await funcs.getcoworking()
     expect(before.data.length-1).toBe(after.data.length)
 });
test('testing coworking get',async()=>{
    const response = await funcs.getcoworking()
    expect(response.data[0].name).toEqual('zidan')
});
test('testing name search', async ()=>{
    const response = await funcs.getcoworkingname('zidan')
    expect(response.data[0].name).toEqual('zidan')
});
test('testing location search ', async ()=>{
    const response = await funcs.getcoworkingEmail('hoba')
    expect(response.data[0].email).toEqual('hoba')
});





