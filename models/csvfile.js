const mongoose =require('mongoose')


const csvSchema = mongoose.Schema({
    file:{
        type:String
    }
},{
    timestamps:true
})