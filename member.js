// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())
const User = require('C:\Users\Salma Sharaby\Desktop\Uni\Semester 6\SE\User');
class member extends User{
    constructor(name,age,skills,interests,certificates,events,projects,reviews)
    {   super(name,age);
        this.skills=skills;
        this.interests=interests;
        this.certificates=certificates;
        this.events=events;
        this.projects=projects;
        this.reviews=reviews;
    }
    
};
const member = [
        
    new member('salma','20','skills1','interests1','certificates1','events1','projects1','reviews1')

];
// We will treat this array of books as our database for now

    //     name: 'The Prince',
    //     age: '20',
    //     skills: '140',
    //     interests: '1513',
    //     certificates:'certificatesmember1',
    //     events:'eventmember1',
    //     projects:'projectmember1',
    //     reviews:'reviewsmember1',
    //     id: '1'
    // },
    // {
    //     name: 'Salma',
    //     age: '20',
    //     skills: '14',
    //     interests: 'interests2',
    //     certificates:'certificatesmember2',
    //     events:'eventmember2',
    //     projects:'projectmember2',
    //     reviews:'reviewsmember2',
    //     id: '2'
    // },
    // {
    //     name: 'omneya',
    //     age: '20',
    //     skills: '140',
    //     interests: '1513',
    //     certificates:'certificatesmember3',
    //     events:'eventmember3',
    //     projects:'projectmember3',
    //     reviews:'reviewsmember3',
    //     id: '3'
    // },
    // {
    //     name: 'rana',
    //     age: '20',
    //     skills: '140',
    //     interests: '1513',
    //     certificates:'certificatesmember4',
    //     events:'eventmember4',
    //     projects:'projectmember4',
    //     reviews:'reviewsmember4',
    //     id: '4'
    // },
    // {
    //     name: 'ahmed',
    //     age: '20',
    //     skills: '140',
    //     interests: '1513',
    //     certificates:'certificatesmember5',
    //     events:'eventmember5',
    //     projects:'projectmember5',
    //     reviews:'reviewsmember5',
    //     id: '5'
    // }

