const funcs = require('./fn')

test('testing member creation', async () =>{
    const created = funcs.createMember()
    expect(created).toBeDefined()
});

test('testing member update', async ()=>{
    const response = await funcs.updateMember('5ca0c819f792812168c302e0',['ay','7aga','hey'])
    expect(response.data.skills.sort()).toEqual(['ay','7aga','hey'].sort())
});
test('testing member delete',async()=>{
    const before = await funcs.getMember()
    funcs.deleteMember('5ca0d4a4f94d2507f8143478')
    const after = await funcs.getMember()
    expect(before.data.length-1).toBe(after.data.length)
});
test('testing member view',async()=>{
    const response = await funcs.getMember()
    expect(response.data[0].firstName).toEqual('ahmed')
});