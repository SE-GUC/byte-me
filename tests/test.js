const funcs12 = require('./fnMember')

// test('testing member creation', async () =>{
//     const created = funcs12.createMember()
//     expect(created).toBeDefined()
// });

// test('testing member update', async ()=>{
//     const response = await funcs12.updateMember('5ca0c819f792812168c302e0',['ay','7aga','hey'])
//     expect(response.data.skills.sort()).toEqual(['ay','7aga','hey'].sort())
// });
//  test('testing member delete',async()=>{
//      const before = await funcs12.getMember()
//      funcs.deleteMember('5ca0cebd315995284c1e2014')
//      const after = await funcs.getMember()
//      expect(before.data.length-1).toBe(after.data.length)
//  });
// test('testing member view',async()=>{
//     const response = await funcs12.getMember()
//     expect(response.data[0].firstName).toEqual('ahmed')
// });
// test('testing firstname search', async ()=>{
//     const response = await funcs12.getMemberFirstName('ahmed')
//     expect(response.data[0].firstName).toEqual('ahmed')
// });
// test('testing lastname search', async ()=>{
//     const response = await funcs12.getMemberLastName('kelyann')
//     expect(response.data[0].lastName).toEqual('kelyann')
// });
// test('testing email search', async ()=>{
//     const response = await funcs12.getMemberEmail('ahmedamr@gmail.com')
//     expect(response.data[0].email).toEqual('ahmedamr@gmail.com')
// });
// test('testing skills search', async ()=>{
//     const response = await funcs12.getMemberSkills('a')
//     expect(response.data[0].skills[0]).toEqual('a')
// });
// test('testing interests search', async ()=>{
//     const response = await funcs12.getMemberInterests('d')
//     expect(response.data[0].interests[1]).toEqual('e')
// });
test('test viewing recommended jobs', async()=>{
    const response = await funcs12.getRecommended('5ca0fb82f759451f18e3ae8f')
    expect(response.length).toBe(4)
})
