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
    attendees : [{
        type : Schema.Types.ObjectId,
        ref: "Member",
        required : false
    }],
    organizedBy : {
        type : Schema.Types.ObjectId,
        ref: "Partner",
        required : true
    },
    status:{
        type: String,
        default: "Pending"
    }
})

module.exports = Event = mongoose.model('Event', EventSchema)
