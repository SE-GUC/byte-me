const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the schema
//ID????
const VacancySchema = new Schema({
    emdDate: {
        type: Date
    },
    ownedBy: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    duration: {
        type: Number
    },
    location: {
        type: String
    },
    monthlyWage: {
        type: Number
    },
    startDate: {
        type: Date
    },
    dailyHonours: {
        type: String
    }
    
})

module.exports = Vacancy = mongoose.model('vacancies', MemberSchema)