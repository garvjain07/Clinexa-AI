import mongoose from 'mongoose';
import serverConfig from './serverConfig.js';
async function connectDB(){
    if (!serverConfig.DB_URL) {
        throw new Error("DB_URL is not configured. Set it in Backend/.env.");
    }

    await mongoose.connect(serverConfig.DB_URL);
    console.log("Successfully connected to the mongodb server...");
}
export default connectDB;