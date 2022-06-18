const csvDatabase = require('../models/csvfile')
const User = require('../models/user')
module.exports.upload=(req,res)=>{
    return res.render('upload',{
        title:'Upload csv',

    })
}

module.exports.uploadFile =(req,res)=>{
    
    csvDatabase.uploadFile(req,res, (err)=>{
        if(err){console.log('multer error',err);}
        console.log('file is',req.file.mimetype)
        if(req.file.mimetype !== 'text/csv')
        {
            console.log('unsupported file type')
            return res.redirect('back')
        }
        if(req.file){
            csvDatabase.create({
                file:csvDatabase.filePath+"\\"+req.file.filename,
                typeofdata:req.body.typeofdata,
                user:req.query.id
            })
            console.log('upload file');
    return res.redirect('/')
        }
    })
    
}
