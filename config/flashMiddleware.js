module.exports.setFlash =function(req,res,next){
    console.log('flash entered');
    res.locals.flash ={
        'success':req.flash('success'),
        'error':req.flash('error')
    }
    next()
}