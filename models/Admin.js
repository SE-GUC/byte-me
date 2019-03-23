const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
//ID????
const AdminSchema = new Schema({
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
    
    password: {
        type: String,
        required: true
    },
    requestID: {//
        type: [Number]
    }
    
})

module.exports = Admin = mongoose.model('admins', AdminSchema)