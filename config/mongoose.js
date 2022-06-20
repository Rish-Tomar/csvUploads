const env = require('../config/environment')
const mongoose= require('mongoose')
mongoose.connect(`mongodb://localhost/${env.DB}`)

const db=mongoose.connection


db.on('error',console.error.bind(console,'error connecting '))

db.once('open',function(){
    console.log('Conneted to DB')
})



module.exports = db