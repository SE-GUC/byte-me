var id = 1
var i = 1
class Vacancy{
    constructor(description,duration,members)
    {
        this.description = description
        this.duration = duration
        this.members = members
        this.id = ""+i++;
    };
};
module.exports = Vacancy
