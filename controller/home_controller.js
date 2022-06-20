const csvDatabase = require('../models/csvfile')
const fs = require('fs')
const csv =require('csv-parser')
const csvv =require('csvtojson')
var results = [];

module.exports.home=async (req,res)=>{

    const csvFiles=await csvDatabase.find({}).populate('user')  
    return res.render('home',{
        title:'home',
        csvFilesData:csvFiles
    })  
}

module.exports.showCsvDetails = async (req,res)=>{

    console.log('request for csv detils',req.query.fileid)

    const csvfile= await csvDatabase.findById(req.query.fileid)
    
    console.log(csvfile.id)
    const filepath = csvfile.file
    console.log(filepath)

    const jsonData = await csvv().fromFile(filepath)
    const keys     = Object.keys(jsonData[0])
    var lengg=jsonData.length
    const csvArray =[]
   
    // console.log("this is json data",jsonData)
    if(req.xhr){
        return res.status(200).json({
            data:{
                filedata:jsonData
            },message:"data sent"
        })
    }
    return res.render('csv_details',{
        title:'csv details',
        data:jsonData,
        keys:keys,
        fileid:csvfile.id
    })

}
