const User = require('../../Project/Models/User');
const event = require ('../../Project/Models/Event');
class Member extends User{
    constructor(name,age,skills,interests,certificates,events,projects,reviews,email,password,courses,workshops)
    {   super(name,email,password);
        this.skills=skills;
        this.interests=interests;
        this.certificates=certificates;
        this.events=events;
        this.projects=projects;
        this.reviews=reviews;
        this.age=age;
        this.courses=courses;
        this.workshops=workshops;
    }

}

module.exports = Member 