const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
const EventSchema = new Schema({
    
    type: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    
    eventDescription: {
        type: String,
        required: true
    },
    eventLocation: {
        type : String,
        required : true
    },
    eventDuration:{
        type : String,
        required : false
    },
    eventDate:{
        type : Date,
        required : true
    },
    attendees : {
        type : [String],
        required : false
    },
    organizedBy : {
        type : String,
        required : true
    }
    

})

module.exports = Event = mongoose.model('Events', EventSchema)
