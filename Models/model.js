const mongoose = require('mongoose')
const { Schema } = mongoose;
const userschema = new Schema({
    name:{
        type:String , 
        required :true,
    },
    username:{
        type:String , 
        required :true,
        unique: true,
    },
    password :{
        type:String,
        required :true,
    }
})
const data = mongoose.model('User' , userschema)
data.createIndexes();
module.exports = data