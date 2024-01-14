const User = require('../models/userModel')
const Resume = require('../models/resumeModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id}, 'resworld123', { expiresIn: '200d'})
}


//post user
const createUser = async (req, res) =>{
    
    const {email, username, password} = req.body
    const resume = false
    try{
        if(!email || !password){
            throw Error('all fields must be filled')
        }

        const exists = await User.findOne({email})

        if(exists){
            throw Error('email already exists')
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await User.create({email,username, password: hash, resume})

        const token = createToken(user._id)

        res.status(200).json({user, token})
        console.log(user, token)
        
    }catch(error){
        res.status(400).json({error: error.message})
        console.log(error.message)
    }
}


//signin user
const loginUser = async (req, res) =>{

    const {username, password} = req.body
    try{
        if(!username || !password){
            throw Error('all fields must be filled')
        }

        const user = await User.findOne({username})

        if(!user){
            throw Error('incorrect username ')
        }

        const match = await bcrypt.compare(password, user.password)


        
        if(!match){
            throw Error('incorrect password')
        }
        const token = createToken(user._id)
        const resume = await Resume.findOne({user_id : user._id})
        if(!resume){
            res.status(200).json({user, token, resume})
        }
        if(resume){
            res.status(200).json({user, token, resume})
        }
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createUser,
    loginUser,
}