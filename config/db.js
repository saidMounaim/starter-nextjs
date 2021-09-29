import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
