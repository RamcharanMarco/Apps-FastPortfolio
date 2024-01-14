const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resumeSchema = new Schema({
    photo:{
        type: String,
    },
    views:{
        type: Number,
    },
    user_id:{
        type: String,
    },
    name:{
        type: String,
    },
    surname:{
        type: String,
    },
    age:{
        type: String,
    },
    cell:{
        type: String,
    },
    gender:{
        type: String,
    },
    font:{
        type: String,
    },
    talent:{
        type: String,
    },
    layout:{
        type: String,
    },
    country:{
        type: String,
    },
    province:{
        type: String,
    },
    hobbies:{
        type: String,
    },
    skills:{
        type: String,
    },
    education:{
        type: String,
    },
    workExperience:{
        type: String,
    },
    about:{
        type: String,
    },
    space:{
        type: String,
    },
    socialmedia:{
        type: String,
    }
},
{timestamps: true})

module.exports = mongoose.model('resume', resumeSchema)

