const uuid = require('uuid')
var i=1
// The User Model
class User {
    
    constructor(name, email, password) {
        this.name = name;
        this.email = email
        this.password = password
        this.id = ""+i++;
    };
};

module.exports = User