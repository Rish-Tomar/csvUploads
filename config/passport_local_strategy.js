/* Imports  */
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User          = require('../models/user')

passport.use(new LocalStrategy({
    usernameField:'email',
    passReqToCallback:true
},(req,email,password,done)=>{

    //find the user in database
    User.findOne({email:email},(err,user)=>{
        if(err){
            console.log('error',err);
            return done(err);
        }

        if(!user || user.password !==password)
        {
            console.log('user passwrod or email incorrect')
            return done(null,false)
        }
        return done(null,user)
    })
}))

//serialize 
passport.serializeUser(function(user,done){
    done(null,user.id)
})



//deserialize
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding user',err);
            return done(err)
        }
        return done(null,user)
    })
})

// check user authenticity
passport.checkAuthentication = (req,res,next)=>{

    if(req.isAuthenticated()){
        return next()
    }
    return res.redirect('/users/sign-in')
}

passport.setAuthenticatedUser = (req,res,next) =>{
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next()
}


module.exports = passport