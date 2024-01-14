const express = require('express')
const router = express.Router()
const {getResume, getTestimonies} = require('../controllers/publicController')


router.get('/:name', getResume)

router.get('/testimonies', getTestimonies)


module.exports = router