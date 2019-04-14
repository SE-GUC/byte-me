const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const VacancySchema = new Schema({
    ownedBy: {
        type: Schema.Types.ObjectId,
        ref: "Partner",
        required: false
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
        type : Number,
        required : true
    },
    startDate : {
        type : Date,
        required : true
    },
    dailyHours : {
        type: Number,
        required : true
    },
    endDate : {
        type : Date,
        required : true
    },
    applicants: [{
      type: Schema.Types.ObjectId,
      ref: "Member",
      required : false
    }],
    status:{
        type: String,
        default: "Pending"
    },
    requiredSkills:[{
        type:String,
        required:true
    }]
})

module.exports = Vacancy = mongoose.model('Vacancy', VacancySchema,'Vacancy')
