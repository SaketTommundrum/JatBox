import mongoose from "mongoose"
import { ENV } from "./env.js";

export const connectDB = async() => {
    try{
        const {MONGO_URI}=ENV;
        if (!MONGO_URI) throw new Error("MONGO_URI is not set");

        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log("MONGOOSE SUCCESS:", conn.connection.host)
        //console.log("MONGO_URI:", ENV.MONGO_URI);
    } catch(error){
        console.error("Error connection to MONGODB:", error)
        process.exit(1); // 1 status code means fail, 0 means sucess
    }
}