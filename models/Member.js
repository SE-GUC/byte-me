const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Event = require('../models/Event')
// Create the schema
const MemberSchema = new Schema({
    ID: {
        type: Number,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true

    },

    dateOfBirth: {
        type: Date,
        required:true
    },

    age:{
        type: Number,
        required:true
    },

    skills:{
        type: [String],
        required:false
    },

    interests: {
        type: [String],
        required:false
    },

    password: {
        type: String,
        required:true
    },

    pastEventsAttended:{
        type: [String],
        required:false
    },

    contractTime:{
        type: String,
        required:true

    },
    contractLocation:{
        type:String,
        required:true
    },

    workCompleted:{
        type:[String],
        required:true
    },

    reviews:{
        type:[String],
        required:true
    },

    status:{
        type: Boolean,
        required:true
    },
    myEvents:{
        type : [String] ,
        required : false
    }
})
module.exports = Member = mongoose.model('members', MemberSchema)
