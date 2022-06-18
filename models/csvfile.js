const mongoose = require('mongoose')
const multer   = require('multer')
const path =require('path')
const FILE_PATH = path.join('uploads/csv')

const csvSchema = mongoose.Schema({
    file:{
        type:String
    },
    typeofdata:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})

// multer
let storage =multer.diskStorage({
    destination: function(req,file,cb){
                    cb(null,path.join(__dirname,'..',FILE_PATH))
                 },                
    filename: function (req,file,cb){
                    cb(null,file.fieldname+'-'+Date.now())
               }
})

csvSchema.statics.uploadFile =multer({storage:storage}).single('file')
csvSchema.statics.filePath = FILE_PATH

const CsvData = mongoose.model('CsvData',csvSchema)

module.exports = CsvData