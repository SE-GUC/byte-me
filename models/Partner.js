const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
//ID????
const PartnerSchema = new Schema({
    fname: {//
        type: String,
        required: true
    },
    lname: {//
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    organisationName: {//
        type: String
    },
    organisationType: {//
        type: Number
    },
    description: {
        type: String
    },
    partners: {
        type: [String],
    },
    password: {
        type: String,
        required: true
    },
    basedMembers: {//
        type: [String]
    },
    eventsID: {
        type: [Number]
    },
    fieldOfWork: {
        type: String
    },
    vacanciesOpenID: {//
        type: Number
    },
    status: {//
        type: String
    },
    feedback: {
        type: String
    }
    
})

module.exports = Partner = mongoose.model('partners', PartnerSchema)