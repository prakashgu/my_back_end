// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
 import dotenv from 'dotenv';
import { app } from './app.js';
 import connectedDB from "./db/index.js";

dotenv.config(
    {
        path: './env'
    }
)

 connectedDB()
 .then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`listining on port ${process.env.PORT}`)
    })
    app.on("error", (error)=>{
        console.log("ERR: ", error)
        throw error
    })
 })
 .catch((error)=> {
    console.log("error from db: ", error)
 })




/*
import express from "express";
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERR: ", error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`the port is listning on ${process.env.PORT}`)
        })
    }catch(error){
        console.log("ERR: ", error)
        throw error
    }
})()
*/