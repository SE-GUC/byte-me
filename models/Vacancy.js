const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Member = require('../models/Member')
// Create the schema
const VacancySchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    ownedBy: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type : String,
        required : true
    },
    location:{
        type : String,
        required : true
    },
    monthlyWage:{
        type : String,
        required : true
    },
    startDate : {
        type : Date,
        required : true
    },
    dailyHours : {
        type: [Number],
        required : true
    },
    endDate : {
        type : Date,
        required : true
    },
    applicants:{
      type: [Member],
      required : false
    }

})

module.exports = Vacancy = mongoose.model('Vacancy', VacancySchema)
