const User = require('D:/GUC/Software Engineering/mystories/User')
class Admin extends User{
    constructor(name,age,dateJoined,email,password)
    {   super(name,email,password);
        this.dateJoined = dateJoined
        this.age=age;
    }
    
}

module.exports = Admin