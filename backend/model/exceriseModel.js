const mongoose = require('mongoose');
const {Schema} = mongoose;


const exceriseSchema = new Schema({
    
    username:{
        type: String, 
        required: true },
    description: {
        type: String,
         required: true },
    duration:{
        type: Number, 
        required: true },
    date:{
        type:Date,
         required: true}

},
{timestamps:true}

);

const excerise = mongoose.model('excerise', exceriseSchema);

module.exports =  excerise;