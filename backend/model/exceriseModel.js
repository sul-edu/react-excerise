const mongoose = require('mongoose');
const {Schema} = mongoose;


const exceriseSchema = new Schema ({
    
    title:{
        type: String, 
        required: true
     },
    description: {
        type: String,
         required: true 
        },
    duration:{
        type: Number, 
        required: true 
    },
    date:{
        type:Date,
        default:Date.now
        }

},
{timestamps:true}

);

module.exports =  mongoose.model('excerise', exceriseSchema);

