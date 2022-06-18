const homeController = require('../controller/home_controller')
const express =require('express')

const router =express.Router()


router.get('/',homeController.home)
router.get('/csvdetails',homeController.showCsvDetails)
router.use('/upload',require('./upload'))
router.use('/users',require('./user'))

module.exports = router