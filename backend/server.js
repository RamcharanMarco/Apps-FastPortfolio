const express = require('express')
const app = express()
const mongoose = require('mongoose')


const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const resumeRoutes = require('./routes/resumeRoutes')
const publicRoutes = require('./routes/publicRoutes')
const userRoutes = require('./routes/userRoutes')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use('/api/auth', authRoutes )
app.use('/api/resume', resumeRoutes)
app.use('/api/public', publicRoutes)
app.use('/api/users', userRoutes)
app.use('/images', express.static('images'));



mongoose.connect('mongodb+srv://marcomongo:mongomarco@marcosclusterno1.kzoqh.mongodb.net/resumeworld?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to the database')
})
.catch((error) => { console.log(error)})


app.listen(process.env.PORT || 5000, ()=>{
console.log('server running')
})