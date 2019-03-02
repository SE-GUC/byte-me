const User = require('../models/User');
class Partner extends User{
    constructor(name,age,email,password,partners,boardmembers,events,field,vacancies,pastprojects,feedback)
    {   super(name,email,password);
        this.partners=partners;
        this.boardmembers=boardmembers;
        this.events=events;
        this.field=field;
        this.vacancies=vacancies;
        this.pastprojects=pastprojects;
        this.feedback=feedback;
        this.age=age
    }

};
module.exports = Partner
