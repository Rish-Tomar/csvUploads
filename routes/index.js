const homeController = require('../controller/home_controller')
const express =require('express')

const router =express.Router()


router.get('/',homeController.home)

module.exports = router