const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    project_id:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
},
{timestamps: true})

module.exports = mongoose.model('comment', commentSchema)