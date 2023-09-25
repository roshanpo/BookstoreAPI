const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');


const mongoURI = process.env.MONGO_URI;


//Connecting to database
mongoose.connect(mongoURI)
        .then(console.log("MongoDB connected"))
        .catch((error) => console.log(error));



//listening to local server port
app.listen(3000, ()=>{
    console.log("Server is up and running!")
})
