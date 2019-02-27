// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())
const User = require('C:\Users\Salma Sharaby\Desktop\Uni\Semester 6\SE\User');
class partnerco extends User{
    constructor(name,age,facilities,rooms,businessplans)
    {   super(name,age);
        this.facilities=facilities;
        this.rooms=rooms;
        this,businessplans=businessplans;
    }
    
};
const partnerco = [
        
    new partnerco('salma','20','facilities1','rooms1','businessplans1')

];
