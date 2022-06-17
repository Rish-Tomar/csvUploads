const express =require('express')
const passport = require('passport')
const router =express.Router()
const userController =require('../controller/user_controller')


router.get('/sign-in',userController.userSignIn)
router.get('/sign-up',userController.userSignUp)

router.get('/signout',userController.destroySession)

router.post('/create-session',
      passport.authenticate('local',
           {failureRedirect:'users/sign-in'})
      ,userController.createSession)

router.post('/create-user',userController.userCreate)
module.exports =router