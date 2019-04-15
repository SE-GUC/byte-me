const funcs = require('./fn');

//Partner tests
test ('partner login',async()=>{
    const exists = funcs.loginPartner()
    expect (exists).toBeDefined()
});

test('testing delete partner',async()=>{
    const before = await funcs.getPartner()
    funcs.deletePartner('5ca1141b21356c2d388904e7')
    const after = await funcs.getPartner()
    expect(before.data.length-1).toBe(after.data.length)
});

test ('testing get all partners',async()=>{
    const list = await funcs.getAllPartners()
    expect(list.data.length).toEqual(1)
});

test('post a partner',async()=>{
    const profile = funcs.createPartner()
    expect (profile).toBeDefined() 
});

test('testing get applicants',async()=>{
    expect.assertions(1)
    const responseA = await funcs.getApplicants('5c9fe3dbb77a711ce4eafa59')
    expect(responseA.data).toEqual([])
});
  
test('testing boardMembers search', async ()=>{
    const response = await funcs.getPartnerBoardMembers('yara')
    expect(response.data[0].boardMembers[0]).toEqual('yara')
});

test('testing fieldOfWork search', async ()=>{
    const response = await funcs.getFieldOfWork('entertainement')
    expect(response.data[0].fieldOfWork).toEqual('entertainement')
});

//Event tests
//Testing get an event
test('testing get request',async()=>{
 expect.assertions(1)
 const response = await funcs.getEvent()
 expect(response.data[0].eventName).toEqual('test event name10')
});

//Testing get all events
test ('testing get all events',async()=>{
  const before0 = await funcs.getEvent()
  expect(before0.data.length).toEqual(1)
});

//Testing update event
//test('testing event put request',async()=>{
  //const response = await funcs.updateEvent('5ca0f5fc20a34c3dfcd7d72e','new test20')
  //expect(response.data.eventDescription).toEqual('new test20')
//});
 
//Testing delete event
//test('testing event delete',async()=>{
  //funcs.deleteEvent('5ca0f5fc20a34c3dfcd7d72e')
  //const response = await funcs.getEvent()
  //expect(response.data[0].eventName).not.toEqual('test event name')
//});

//Testing create event
test('testing event post',async()=>{
  const m = funcs.postEvent()
  expect (m).toBeDefined()
});

//Testing member apply for an event
test('testing event apply put request',async()=>{
  const response = await funcs.applyOnEvent('5ca0c819f792812168c302e0','5c9f6c3de7407b1ddc2b0ab6')
  expect(response.data.data.attendees[0]).toEqual('5ca0c819f792812168c302e0')
});

//Testing partner create event
//test('testing event partner create put request',async()=>{
  //const response = await funcs.pcreateEvent('5ca0f7a134ede009c00c3f42','5ca0f5fc20a34c3dfcd7d72e')
  //expect(response.data.data.organizedBy).toEqual('5ca0f7a134ede009c00c3f42')
//});

//Testing search event by location
test('testing search location event',async()=>{
  const response = await funcs.searchEventLocation('alexxxxxx')
  expect(response.data.data[0].eventLocation).toEqual('alexxxxxx')
});

//Testing search event by date
//test('testing search date event',async()=>{
  //const response = await funcs.searchEventDate('2019-01-08T22:00:00.000Z')
  //expect(response.data.data[0].eventDate).toEqual('2019-01-08T22:00:00.000Z')
//});

//Admin tests
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
});

//Testing delete admin
test('testing delete admin',async()=>{
  const before = await funcs.getAdmin()
  funcs.deleteAdmin('5c9e37891c9d440000a70ff6')
  const after = await funcs.getAdmin()
  expect(before.data.length-1).toEqual(after.data.length) 
});

//Vacancy tests
test('testing vacancy put request',async()=>{
  const response = await funcs.updateVacancy('5c9ff01468d8473d10c906b4','new duration')
  expect(response.data.duration).toEqual('new duration')
});

test('testing vacancy apply put request',async()=>{
  const response = await funcs.ApplyOnVacancy('5ca0c9e34d07134690c4a021','5ca0033c43407c153c90628a')
  expect(response.data.data.applicants[0]).toEqual('5ca0c9e34d07134690c4a021')
});

test('testing search location vacancy',async()=>{
  const response = await funcs.searchVacancyLocation('cairo')
  expect(response.data.data[0].location).toEqual('cairo')
});

test('testing search duration vacancy',async()=>{ 
  const response = await funcs.searchVacancyDuration('8 hours')
  expect(response.data.data[0].duration).toEqual('8 hours')
});
  
test('testing get request vacancy',async()=>{
  expect.assertions(1)
  const response = await funcs.getVacancy()
  expect(response.data[0].duration).toEqual('8 hours')
});

test('testing vacancy post',async()=>{
  const m = funcs.postVacancy()
  expect (m).toBeDefined()
});

test('testing search start date vacancy',async()=>{ 
  const response = await funcs.searchVacancyStartDate('2019-01-04T22:00:00.000Z')
  expect(response.data.data[0].startDate).toEqual('2019-01-04T22:00:00.000Z')
});

test('testing search end date vacancy',async()=>{
  const response = await funcs.searchVacancyEndDate('2019-12-22T22:00:00.000Z')
  expect(response.data.data[0].endDate).toEqual('2019-12-22T22:00:00.000Z')
});

test('testing vacancy delete',async()=>{
  const before = await funcs.getVacancy() 
  funcs.deleteVacancy('5ca0f3f0e470641490b6787f')
  const after = await funcs.getVacancy() 
  expect(before.data.length-1).toBe(after.data.length) 
});

//Members tests
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

test('test viewing recommended jobs', async()=>{
  const response = await funcs.getRecommended('5ca0fb82f759451f18e3ae8f')
  expect(response.length).toBe(4)
});

//Coworking tests
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

test('Register Coworking', async () =>{
  const registered = funcs.registerCO()
  expect(registered).toBeDefined()
});

test('New Room', async ()=>{
  const response = await funcs.postRoom('5ca1256430ad6d49b447d4f7')
  expect(response).toBeDefined()
});

test('Edit Room', async ()=>{
  const response = await funcs.editRoom('5ca1256430ad6d49b447d4f7','5ca1262afe22c22a64bbf35d', 500000)
  expect(response.data[0].sort()).toEqual(50000)
});

test('Delete Room', async ()=> {
  const response = await funcs.deleteRoom('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e')
 expect(response.data._id).toBe('5ca0e179df45b53e1c4fbd4e')
});

test('New Schedule', async ()=>{
  const response = await funcs.newSchedule('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e')
  expect(response).toBeDefined()
});

test('Edit Schedule', async ()=>{
  const response = await funcs.editSchedule('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e','5ca0e179df45b53e1c4fbd51',"18/11/2005 From 7:00PM to 8:00 PM ")
  expect(response.data.rate.sort()).toEqual("18/11/2005 From 7:00PM to 8:00 PM ")
});

test('Reserve', async ()=>{
  const response = await funcs.reserve('5ca0c4eb81206647c88c35bb','5ca0e179df45b53e1c4fbd4e','5ca0e179df45b53e1c4fbd51',"5ca1141b21356c2d388904e7")
  expect(response.data.reserve.sort()).toEqual(true)
});

test('Login Coworking', async () =>{
  const login = funcs.loginCO()
  expect(login).toBeDefined()
});
