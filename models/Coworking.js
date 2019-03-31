const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema

const Schedule = new Schema({
    date: {
            type: String,
            required: true,         
    },
    reserverID: {
        type: Schema.Types.ObjectId,
        ref: "Partner",
    },
    reserved: {
        type: Boolean,
        required: false,
        default: false
    }
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
    reservation: {
        type: [Schedule],
    },
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
