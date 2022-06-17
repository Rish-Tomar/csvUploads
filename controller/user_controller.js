const User =require('../models/user')

module.exports.userSignIn=(req,res)=>{
    return res.render('sign_in',{
        title:'User sign in'
    })
}

module.exports.userSignUp=(req,res)=>{
    return res.render('sign_up',{
        title:'User Register'
    })
}

module.exports.userCreate=(req,res)=>{
    console.log("req.body",req.body)
    if(req.body.password!==req.body.confirm_password){
        console.log('password doesnot match')
        return res.redirect('back')
    }
    //create user in database
    User.findOne({email:req.body.email}, (err,user)=>{
        if(err){console.log('error',err);return;}

        if(!user){
            User.create(req.body,(err,user)=>{
                if(err){console.log('error in creating user',err);return;}

                console.log('user created',user);
                return res.redirect('/users/sign-in')
            })
        }
        if(user){
            console.log('user already exists, go to sign in')
            return res.redirect('/users/sign-up')
        }
    })
}
module.exports.createSession=(req,res)=>{
    // create session
    console.log('create session')
    return res.redirect('back')
}