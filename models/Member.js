const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
const Review = new Schema({
    rating: {
        type: Number,
        required: true
    },
    reviewerID: {
        type: Schema.Types.ObjectId,
        ref: "Partner",
        required: true
    }
}) 
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
        type: String,
        required: false
    },
    dateOfBirth: {
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:false
    },
    skills:[{
        type: String,
        required:false
    }],
    interests: [{
        type: String,
        required:false
    }],
    password: {
        type: String,
        required:true
    },
    pastEventsAttended:[{
        type: Schema.Types.ObjectId,
        required:false
    }],
    contractTime:{
        type: String,
        required:false
    },
    contractLocation:{
        type:String,
        required:false
    },
    workCompleted:[{
        type:String,
        required:false
    }],
    reviews:[{
        type: Review,
        required:false
    }],
    status:{
        type:String,
        default: "Pending"
    },
    placeOfResidence:{
        type:String,
        required:true
    }
})
module.exports = Member = mongoose.model('Member', MemberSchema,'Member')
