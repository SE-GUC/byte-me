// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())
const User = require('C:\Users\Salma Sharaby\Desktop\Uni\Semester 6\SE\User');
class partner extends User{
    constructor(name,age,partners,boardmembers,events,field,vacancies,pastprojects,feedback)
    {   super(name,age);
        this.partners=partners;
        this.boardmembers=boardmembers;
        this.events=events;
        this.field=field;
        this.vacancies=vacancies;
        this.pastprojects=pastprojects;
        this.feedback=feedback;
    }
    
};
const partner = [
        
    new partner('salma','20','partners1','boardmembers1','events1','field','vacancies','pastprojects','feedback')

];
