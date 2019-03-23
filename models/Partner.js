const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
const PartnerSchema = new Schema({

    organizationName: {
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
    description: {
        type: String,
        required: false
    },
    partners: {
        type : [String],
        required : true
    },
    boardMembers:{
        type : [String],
        required : true
    },
    eventID:{
        type : [Number],
        required : false
    },
    fieldOfWork : {
        type : String,
        required : true
    },
    vacancyID : {
        type: [Number],
        required : false
    },
    status:{
        type: String,
        required: true,
        default: "Pending"
    }
    
})

module.exports = Partner = mongoose.model('Partners', PartnerSchema)
