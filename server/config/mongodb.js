import mongoose from "mongoose";

const connectDB = async () => {
    try{
     
     await mongoose.connect(process.env.MONGO_URI);
      console.log("Connection with mongoose using mondoDB is successful 😉");

    }catch(err){
     console.log("An error came while connecting the mongoose", err.message);
     console.error(err);

    }
}

export default connectDB;