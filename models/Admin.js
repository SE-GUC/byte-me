const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
const AdminSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type : String,
        required : true
    }
})

module.exports = Admin = mongoose.model('Admins', AdminSchema)
