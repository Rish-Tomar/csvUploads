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
module.exports.createSession=(req,res)=>{
    // create session
    console.log('create session')
    return res.redirect('back')
}