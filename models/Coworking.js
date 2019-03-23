const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
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
    rooms: {
        type: [String],
        required: true
    },
    status: {
        type : boolean,
        required : true
    },
    facilities:{
        type : [String],
        required : true
    },
    businessPlan : {
        type: String,
        required : true
    }

})

module.exports = Coworking = mongoose.model('PartnerCoWorkings', CoworkingSchema)
