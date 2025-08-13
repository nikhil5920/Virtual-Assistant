import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
            console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB :", error);
        // process.exit(1); // Exit the process with failure
    }
};

export default connectDb;
