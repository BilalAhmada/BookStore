// const express = require('express');
// const dotenv = require('dotenv');
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 4000;
const uri = process.env.MongoDBURI;

//connect to mdb
try {
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
console.log("MongoDB connected successfully");
}
catch(err){
    console.log("MongoDB connection error:",err);
}

// defining routes
app.use('/book',bookRoute);
app.use("/user",userRoute)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});