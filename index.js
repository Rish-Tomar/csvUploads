/*<- imports  ->*/
const express = require('express')
const path    = require('path')
const DB      = require('./config/mongoose')
const expressEjsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const sassMiddleware =require('node-sass-middleware')


/*<- MIDDLEWARES ->*/

//using express an an app
const app= express()

//sass middleware 
app.use(sassMiddleware({
    src: path.join(__dirname,'./assets/scss'),
    dest: path.join(__dirname,'./assets/css'),
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}))
//middlewares for ejs views
  app.set('view engine','ejs')
  app.set('views',path.join(__dirname,'views'))

//middleware for excessing static's
  app.use(express.static('./assets'))

  app.use(expressEjsLayouts)

//extract styles and scripts from sub pages into the layout
   app.set('layout extractStyles',true)
   app.set('layout extractScripts',true)


//middleware for using routes
  app.use('/',require('./routes'))


/*<- Server listining ->*/
app.listen(8000,(err)=>{
    if(err){console.log('error occured',err)}
    console.log(`server running on port ${8000}`)
})