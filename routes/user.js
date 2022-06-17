const express =require('express')
const userController =require('../controller/user_controller')
const router =express.Router()


router.get('/sign-in',userController.userSignIn)
router.get('/sign-up',userController.userSignUp)

router.post('/create-session',userController.createSession)
router.post('/create-user',userController.userCreate)
module.exports =router