const express = require('express');
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose')

const port = process.env.PORT || 5000;
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
//route files
const exceriseRoute = require('./route/excerise');
const userRoute = require('./route/user');

//routes
app.use('/excerise', exceriseRoute);
app.use('/user', userRoute);






// connection to mongo_db
const url = process.env.ATLAS_URL;
mongoose.connect(url, {useNewUrlParser:true})

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log('mongodb database connection successfully established')
})



app.listen(port, () => {
    console.log(`server is listening at port: ${port}`);
})