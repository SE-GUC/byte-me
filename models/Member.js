const User = require('../models/User')
class Member extends User{
    constructor(name,age,skills,interests,certificates,events,projects,reviews,email,password)
    {   super(name,email,password);
        this.skills=skills;
        this.interests=interests;
        this.certificates=certificates;
        this.events=events;
        this.projects=projects;
        this.reviews=reviews;
        this.age=age;
    }
    
}

module.exports = Member
