import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import contactRouter from "../server/routes/contactRouter.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//conatact router
app.use("/api/contact", contactRouter);

//test api call
app.get("/api/hello", (req, res) => {
    res.json({message:"This is my server port running 😍"});
});

app.listen(PORT, () => {
    console.log(`The app is listening on the port ${PORT}`);
})