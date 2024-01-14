const mongoose = require('mongoose')

const Schema = mongoose.Schema

const testimonialSchema = new Schema({
    user_id:{
        type: String,
        required: true
    },
    photo:{
        type: String,
    },
    name:{
        type: String,
    },
    surname:{
        type: String,
    },
    profession:{
        type: String,
    },
    body:{
        type: String,
    },
},
{timestamps: true})

module.exports = mongoose.model('testimonial', testimonialSchema)