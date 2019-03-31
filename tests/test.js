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
     funcs.deleteMember('5ca0cebd315995284c1e2014')
     const after = await funcs.getMember()
     expect(before.data.length-1).toBe(after.data.length)
 });
test('testing member view',async()=>{
    const response = await funcs.getMember()
    expect(response.data[0].firstName).toEqual('ahmed')
});
test('testing firstname search', async ()=>{
    const response = await funcs.getMemberFirstName('ahmed')
    expect(response.data[0].firstName).toEqual('ahmed')
});
test('testing lastname search', async ()=>{
    const response = await funcs.getMemberLastName('kelyann')
    expect(response.data[0].lastName).toEqual('kelyann')
});
test('testing email search', async ()=>{
    const response = await funcs.getMemberEmail('ahmedamr@gmail.com')
    expect(response.data[0].email).toEqual('ahmedamr@gmail.com')
});
test('testing skills search', async ()=>{
    const response = await funcs.getMemberSkills('a')
    expect(response.data[0].skills[0]).toEqual('a')
});
test('testing interests search', async ()=>{
    const response = await funcs.getMemberInterests('d')
    expect(response.data[0].interests[1]).toEqual('e')
});
