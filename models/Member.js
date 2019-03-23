const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
//ID????
const MemberSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    expiringDate: {
        type: Date
    },
    age: {
        type: Number,
        required: true
    },
    skills: {
        type: [String]
    },
    interests: {
        type: [String]
    },
    password: {
        type: String,
        required: true
    },
    pastAttendedEvents: {
        type: [String]
    },
    eventTime: {
        type: Date
    },
    eventLocation: {
        type: String
    },
    workComp: {
        type: [String]
    },
    reviews: {
        type: [String]
    },
    accountStatus: {
        type: String
    },
    certifications: {
        type: String
    }
    
})

module.exports = Member = mongoose.model('members', MemberSchema)