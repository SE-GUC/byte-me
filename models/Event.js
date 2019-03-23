const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
//ID????
const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    attendees: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    organizedBy: {
        type: String,
        required: true
    }
    
})

module.exports = Event = mongoose.model('events', EventSchema)