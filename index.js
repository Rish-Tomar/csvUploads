/*<- imports  ->*/
const express = require('express')
const path    = require('path')
const expressEjsLayouts = require('express-ejs-layouts')


/*<- MIDDLEWARES ->*/

//using express an an app
const app= express()

//middlewares for ejs views
  app.set('view engine','ejs')
  app.set('views',path.join(__dirname,'views'))
  app.use(expressEjsLayouts)

//middleware for using routes
  app.use('/',require('./routes'))


/*<- Server listining ->*/
app.listen(8000,(err)=>{
    if(err){console.log('error occured',err)}
    console.log(`server running on port ${8000}`)
})