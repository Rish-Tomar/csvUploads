const uploadController=require('../controller/upload-controller')
const express =require('express')
const passport = require('passport')
const router =express.Router()

router.get('/upload-home',passport.checkAuthentication,uploadController.upload)

router.post('/file',uploadController.uploadFile)


module.exports = router