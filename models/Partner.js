const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
const PartnerSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
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
    }

})

module.exports = Partner = mongoose.model('Partners', PartnerSchema)
