const funcs = require('./coworkingfn')

test('testing coworking update', async ()=>{
    const response = await funcs.updatecoworking('5ca1256430ad6d49b447d4f7','youssefzidan2010@gmail.com')
    expect(response.data.email.sort()).toEqual('youssefzidan2010@gmail.com'.sort())
});
 test('testing coworking delete',async()=>{
     const before = await funcs.getcoworking()
     funcs.deletecoworking('5ca1256430ad6d49b447d4f7')
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
    const response = await funcs.getcoworkinglocation('hoballa')
    expect(response.data[0].location).toEqual('hoballa')
});
test('testing specific coworking ', async ()=>{
    const response = await funcs.getspecificcoworking('hoba')
    const x = respone.data[0]
    console.log(x)
    expect(response.data[0].name).toEqual('hoba')
});
