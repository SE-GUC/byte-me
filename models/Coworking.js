const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
//ID????
const CoworkingSchema = new Schema({
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
    businessPlans: {
        type: Number
    },
    facilities: {
        type: String
    },
    status: {//
        type: String
    },
    rooms: {
        type: [String]
    }
    
})

module.exports = Coworking = mongoose.model('coworkings', CoworkingSchema)