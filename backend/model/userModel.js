const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = Schema({
    username:{
         type:String,
          required:true, 
          trim:true,
          minlength:3
        },
    }      
);

module.exports = mongoose.model('user', userSchema);

