class User {
    constructor(email, password, name) {
        this.id=uuid.v4();
        this.email=email;
        this.password=password;
        this.name=name;
    };
}

module.exports = User