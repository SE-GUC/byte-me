const User = require('../models/User');
class Coworking {
    constructor(email, password, name, location, joinDate, openingHours, equipments, classicBasics, seating, tour, facilities, rooms, plans, availability) {
        super(name,email,password);
        this.location=location;
        this.joinDate=joinDate;
        this.openingHours=openingHours;
        this.equipments=equipments;
        this.classicBasics=classicBasics;
        this.seating=seating;
        this.tour=tour;
        this.facilities=facilities;
        this.rooms=rooms;
        this.plans=plans;
        this.availability=availability;
    };
}

module.exports = Coworking
