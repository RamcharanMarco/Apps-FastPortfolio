const Resume = require('../models/resumeModel')
const User = require('../models/userModel')
const Testimony = require('../models/testimonial')


const getInfo = async (req, res) =>{
    const user_id = req.user._id
    try{
        const user = await User.findOne({_id:user_id})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error : error.message})
        console.log(error)
    }
}

const getResStatus = async (req, res) =>{
    const user_id = req.user._id
    try{
        const resume = await Resume.findOne({user_id})
        if(resume){
            res.status(200).json(true)
        }
        if(!resume){
            res.status(200).json(false)
        }
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

//delete a word
const deleteUser = async (req, res) =>{
    const user_id = req.user._id
    try{
        const deletedUser = await User.findOneAndDelete({_id: user_id})
        if(deletedUser){
            console.log('resume deleted')
            res.status(200).json(true)
        }
        if(!deletedUser){
            res.status(200).json(false)
        }
    }catch(error){
        console.log(error)
        res.status(400).json({error: error.message})

    }
}

const addTestimony = async (req, res) => {
    const user_id = req.user._id
    const {body, profession, name, surname} = req.body
    try{
        const user = await User.findOne({_id:user_id})
        let photo = user.photo
        const testimony = await Testimony.create({user_id,name,surname,profession, photo})
        res.status(200).json(testimony)
        console.log(testimony)
    }catch(error){
        res.status(400).json({error : error.message})
        console.log(error)
    }
}

const deleteTestimony = async (req, res) =>{
    const user_id = req.user._id
    try{
        const test = await Testimony.findOneAndDelete({_id: user_id})
        if(test){
            res.status(200).json(true)
        }
        if(!test){
            res.status(200).json(false)
        }
    }catch(error){
        console.log(error)
        res.status(400).json({error: error.message})

    }
}

const getTestimony = async (req, res) =>{
    const user_id = req.user._id
    try{
        const testimony = await Testimony.findOne({_id:user_id})
        res.status(200).json(testimony)
    }catch(error){
        res.status(400).json({error : error.message})
        console.log(error)
    }
}



module.exports = {
    getInfo,
    deleteUser,
    addTestimony,
    deleteTestimony,
    getTestimony
}