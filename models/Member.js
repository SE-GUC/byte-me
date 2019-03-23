const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
const MemberSchema = new Schema({

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
        required: false
    },
    dateOfBirth: {
        type: Date,
        required:true
    },
    age:{
        type: Number,
        required:false
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
        required:false
    },
    contractLocation:{
        type:String,
        required:false
    },
    workCompleted:{
        type:[String],
        required:false
    },
    reviews:{
        type:[String],
        required:false
    },
    status:{
<<<<<<< HEAD
        type:String,
        required:true,
        default: "Pending"
    }
=======
        type: Boolean,
        required:true
        
    },
    
>>>>>>> salmadev
})
module.exports = Member = mongoose.model('members', MemberSchema)
