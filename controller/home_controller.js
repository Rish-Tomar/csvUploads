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

    const filepath = csvfile.file

    const jsonData = await csvv().fromFile(filepath)
    const keys     = Object.keys(jsonData[0])
    // const csvdata  = JSON.parse(jsonData)
    //converting json to normal object
    var lengg=jsonData.length
    const csvArray =[]
    // jsonData.forEach((data)=>{
    //     console.log('csv data',data)
    //     // const result = JSON.parse(data)
    //     // csvArray.push(result)
    // })
    console.log(csvArray)
    return res.render('csv_details',{
        title:'csv details',
        data:jsonData,
        keys:keys
    })

}


// module.exports.home=(req,res)=>{

//     csvDatabase.find({},(err,data)=>{
//         if(err){console.log('error')}
//         console.log('files',data)
//         data.forEach(element => {
//             const filedata=[]  
//             fs.createReadStream(element.file)  
//             .pipe(csv())
//             .on('data', (data) => filedata.push(data))
//             .on('end', () => {
//                 // [
//                 //   { NAME: 'Daffy Duck', AGE: '24' },
//                 //   { NAME: 'Bugs Bunny', AGE: '22' }
//                 // ]
//               })
//             //   results.push(filedata) 
//               console.log(results[0]);        
//         });
//     })

//     return res.render('home',{
//         title:'home'
//     })
    
// }




// csvFiles.forEach(async (element) => {
//     const csvFilePath = element.file;
//     const jsonDataArray = await csvv().fromFile(csvFilePath);
//     results.push(jsonDataArray);
//     console.log('josn data', jsonDataArray.length);

// });