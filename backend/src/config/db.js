import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo connected successfully");
    } catch (error) {
        console.error("error connecting to mongodb", error);
        process.exit(1); //1 means exit with failure, 0 means exit with success
    }
}