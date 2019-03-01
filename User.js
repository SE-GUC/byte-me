const uuid = require('uuid')
// The User Model
class User {
    
    constructor(name, email, password) {
        this.name = name;
        this.email = email
        this.password = password
        this.id = uuid.v4(); //edited id initialization
    };
};

module.exports = User
