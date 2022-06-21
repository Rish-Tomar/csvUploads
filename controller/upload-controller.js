const csvDatabase = require('../models/csvfile')
const User = require('../models/user')
const path = require('path')
const fs = require('fs')

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
            fs.unlinkSync(path.join(csvDatabase.filePath+"/"+req.file.filename))
            req.flash('error','Unsupported file format, use .csv')
            return res.redirect('back')
        }
        console.log("filepathis",csvDatabase.filePath+"/"+req.file.filename)
        if(req.file){
            csvDatabase.create({
                file:csvDatabase.filePath+"/"+req.file.filename,
                typeofdata:req.body.typeofdata,
                user:req.query.id
            })
            console.log('upload file');
    return res.redirect('/')
        }
    })
    
}
