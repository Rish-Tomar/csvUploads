const uploadController=require('../controller/upload-controller')
const express =require('express')
const passport = require('passport')
const router =express.Router()

router.get('/',passport.checkAuthentication,uploadController.upload)


module.exports = router