const User = require('../models/User');
class COworking {
    constructor(email, password, name, location, joinDate, openingHours, equipments, classicBasics, seating, tour, facilities, rooms, plans, availability) {
        super(email,password,name);
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

module.exports = COworking
