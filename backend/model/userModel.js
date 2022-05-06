const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
         type:String,
          required:true, 
          trim:true,
          minlength:3
        },
    },
        {timestamps: true}
);

const user = mongoose.model('user', userSchema);

module.exports = user;