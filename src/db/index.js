 import mongoose from "mongoose";
 import { DB_NAME } from "../constants.js";


 const connectedDB = async () => {
    try{
        const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Hello World || ${connectionIntance.connection.host} `)
    }catch(error){
        console.log("connection error: ", error);
        process.exit(1)
    }
 }

 export default connectedDB;