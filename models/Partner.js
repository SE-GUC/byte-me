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
    partners: [{
        type : String,
        required : true
    }],
    boardMembers:[{
        type : String,
        required : true
    }],
    eventID:[{
        type : Schema.Types.ObjectId,
        ref: "Event",
        required : false
    }],
    fieldOfWork : {
        type : String,
        required : true
    },
    vacancyID : [{
        type: Schema.Types.ObjectId,
        ref: "Vacancy",
        required : false
    }],
    status:{
        type: String,
        default: "Pending"
    },
    expiryDate: {
        type: Date,
        required: false
    },
    contractTime:{
        type: String,
        required:false
    },
    contractLocation:{
        type:String,
        required:false
    }
    
})

var Partner=module.exports = Partner = mongoose.model('Partner', PartnerSchema,'Partner')
