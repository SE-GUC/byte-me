const funcs = require('./fn')

test('testing member creation', async () =>{
    //expect.assertions(1)
    const created = funcs.createMember()
    expect(created).toBeDefined()
});

test('testing member update', async ()=>{
    const response = await funcs.updateMember('5c9fe140f7301918e4cc26c1',['ay','7aga','hey'])
    expect(response.data.skills.sort()).toEqual(['ay','7aga','hey'].sort())
});