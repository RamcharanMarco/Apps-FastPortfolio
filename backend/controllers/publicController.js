const Resume = require('../models/resumeModel')
const mongoose = require('mongoose')



//get single
const getResume = async (req, res) =>{
    console.log(req.params)
    const username = req.params.username
    console.log(token)
    try{
        const resume = await Resume.findOne({username})
        if(!resume){
            return res.status(200).json(false)
        }
        const view = await Resume.findOneAndUpdate(username,{ views: resume.views+1})
        console.log(view.views)
        res.status(200).json(resume)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//get single
const getTestimonies = async (req, res) =>{
    try{
        const testimonies = await Testimony.find()
        res.status(200).json(testimonies)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    getResume,
    getTestimonies
}


