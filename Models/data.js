const mongoose = require('mongoose');
const { Schema } = mongoose;

const data = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    item:{
        type : String,
        required:true
    } 
})
const noidea =  mongoose.model('data' , data)
module.exports =noidea