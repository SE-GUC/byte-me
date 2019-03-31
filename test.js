const functions = require('./fnVacancy');
const axios = require('axios');


test('testing vacancy put request',async()=>{
  const response = await functions.updateVacancy('5c9ff01468d8473d10c906b4','new duration')
  expect(response.data.duration).toEqual('new duration')
},
);
  test('testing vacancy apply put request',async()=>{
    const response = await functions.ApplyOnVacancy('5ca0c9e34d07134690c4a021','5ca0033c43407c153c90628a')
    expect(response.data.data.applicants[0]).toEqual('5ca0c9e34d07134690c4a021')
  },
  );
  test('testing search location vacancy',async()=>{
  
    const response = await functions.searchVacancyLocation('cairo')
    expect(response.data.data[0].location).toEqual('cairo')
    },
    );
  test('testing search duration vacancy',async()=>{
  
  const response = await functions.searchVacancyDuration('8 hours')
  expect(response.data.data[0].duration).toEqual('8 hours')
  },
  );
  
test('testing get request vacancy',async()=>{
expect.assertions(1)
const response = await functions.getVacancy()
expect(response.data[0].duration).toEqual('8 hours')
},
);

 test('testing vacancy delete',async()=>{
   const before = await functions.getVacancy() 
   functions.deleteVacancy('5ca0f42dcde6f21cd823045e')
   const after = await functions.getVacancy() 
   expect(before.data.length-1).toBe(after.data.length) 
  },
  );
test('testing vacancy post',async()=>{
  const before =await functions.getVacancy()
  const m = functions.postVacancy()
  const after = await functions.getVacancy()
  expect (m).toBeDefined()
},
);
  test('testing search start date vacancy',async()=>{
  
  const response = await functions.searchVacancyStartDate('2019-01-04T22:00:00.000Z')
  expect(response.data.data[0].startDate).toEqual('2019-01-04T22:00:00.000Z')
  },
  );
test('testing search end date vacancy',async()=>{

const response = await functions.searchVacancyEndDate('2019-12-22T22:00:00.000Z')
expect(response.data.data[0].endDate).toEqual('2019-12-22T22:00:00.000Z')
},
);



 

