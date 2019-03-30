const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema

const Schedule = new Schema({
    date: {
        type: String,
    },
    reserverID: {
        type: Schema.Types.ObjectId,
        ref: "Partner",
    },
    reserved: {
        type: Boolean,
        required: false,
    },
})

const Room = new Schema({
    roomNo: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    reservation: [{
        type: Schedule,
        default: [{
            date: "03/12/2018 From 9:00 AM to 10:00 AM",
            date: "03/12/2018 From 10:00 AM to 11:00 AM",
            date: "03/12/2018 From 11:00 AM to 12:00 PM",
            date: "03/12/2018 From 12:00 PM to 1:00 PM",
            date: "03/12/2018 From 1:00 PM to 2:00 PM",
            date: "03/12/2018 From 2:00 PM to 3:00 PM",
            date: "03/12/2018 From 3:00 PM to 4:00 PM",
            date: "03/12/2018 From 4:00 PM to 5:00 PM",
            date: "03/12/2018 From 5:00 PM to 6:00 PM",
            date: "03/12/2018 From 6:00 PM to 7:00 PM",
            date: "03/12/2018 From 7:00 PM to 8:00 PM",
            date: "03/12/2018 From 8:00 PM to 9:00 PM",
            date: "04/12/2018 From 9:00 AM to 10:00 AM",
            date: "04/12/2018 From 10:00 AM to 11:00 AM",
            date: "04/12/2018 From 11:00 AM to 12:00 PM",
            date: "04/12/2018 From 12:00 PM to 1:00 PM",
            date: "04/12/2018 From 1:00 PM to 2:00 PM",
            date: "04/12/2018 From 2:00 PM to 3:00 PM",
            date: "04/12/2018 From 3:00 PM to 4:00 PM",
            date: "04/12/2018 From 4:00 PM to 5:00 PM",
            date: "04/12/2018 From 5:00 PM to 6:00 PM",
            date: "04/12/2018 From 6:00 PM to 7:00 PM",
            date: "04/12/2018 From 7:00 PM to 8:00 PM",
            date: "04/12/2018 From 8:00 PM to 9:00 PM",
            date: "05/12/2018 From 9:00 AM to 10:00 AM",
            date: "05/12/2018 From 10:00 AM to 11:00 AM",
            date: "05/12/2018 From 11:00 AM to 12:00 PM",
            date: "05/12/2018 From 12:00 PM to 1:00 PM",
            date: "05/12/2018 From 1:00 PM to 2:00 PM",
            date: "05/12/2018 From 2:00 PM to 3:00 PM",
            date: "05/12/2018 From 3:00 PM to 4:00 PM",
            date: "05/12/2018 From 4:00 PM to 5:00 PM",
            date: "05/12/2018 From 5:00 PM to 6:00 PM",
            date: "05/12/2018 From 6:00 PM to 7:00 PM",
            date: "05/12/2018 From 7:00 PM to 8:00 PM",
            date: "05/12/2018 From 8:00 PM to 9:00 PM",
        }]
    }],
    rate: {
        type: Number,
        required: true
    }
})

const CoworkingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    rooms: [{
        type: Room,
        required: true
    }],
    status: {
        type : String,
        default: "Pending"
    },
    facilities:[{
        type : String,
        required : true
    }],
    businessPlan : {
        type: String,
        required : true
    },
    expiryDate: {
        type: Date,
        required: false
    },
    contractTime:{
        type: Date,
        required:false
    },
    contractLocation:{
        type:String,
        required:false
    }
})

module.exports = Coworking = mongoose.model('Coworking', CoworkingSchema,'Coworking')
