/*<- imports  ->*/
require('dotenv').config()
const express = require('express')
const path    = require('path')
const DB      = require('./config/mongoose')
const expressEjsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const sassMiddleware =require('node-sass-middleware')
const session  = require('express-session')
const passport = require('passport')
const passportLocal =require('./config/passport_local_strategy')
const MongoStore = require('connect-mongo')
const env=require('./config/environment')
const PORT = env.PORT || 8000

const Flash =require('connect-flash')
const flashMiddleware = require('./config/flashMiddleware')
/*<- MIDDLEWARES ->*/

//using express an an app
const app= express()

//middleware to insert asssetpath function from helper function inside config
  require('./config/views_assets_helper')(app)
//sass middleware 
app.use(sassMiddleware({
    src: path.join(__dirname,'./assets/scss'),
    dest: path.join(__dirname,'./assets/css'),
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}))
//middleware for url requests and sessions
  app.use(express.urlencoded({extended: false}))
//middlewares for ejs views
  app.set('view engine','ejs')
  app.set('views',path.join(__dirname,'views'))

//middleware for excessing static's
  app.use(express.static(env.assetPath))

  app.use(expressEjsLayouts)
// extract style and scripts from sub pages into the layout
  app.set('layout extractStyles', true);
  app.set('layout extractScripts', true);

//extract styles and scripts from sub pages into the layout
   app.set('layout extractStyles',true)
   app.set('layout extractScripts',true)
//middleware for using express session
  app.use(session({
    name:'csvskilltest',
    secret:env.session_cookie_key,
    saveUninitialized:false,
    resave:false,
    cookie:{
      maxAge:(1000*60*50)
    },
    store: MongoStore.create({
      mongoUrl:'mongodb://localhost/csv_development',
      autoRemove:'disabled'
      },
    function(err){
      console.log(err ||'Connected to mongostore db');
      }
    )
  }))
//middleware for passport local strategy
  app.use(passport.initialize())
  app.use(passport.session())

//middleware for saving the users information in cookies
  app.use(passport.setAuthenticatedUser)

//using connect-flash  
  app.use(Flash())
  app.use(flashMiddleware.setFlash)

//middleware for using routes
  app.use('/',require('./routes'))


/*<- Server listining ->*/
app.listen(PORT,(err)=>{
    if(err){console.log('error occured',err)}
    console.log(`server running on port ${PORT}`)
})