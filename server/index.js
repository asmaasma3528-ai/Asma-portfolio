import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.config || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({message:"This is my server port running 😍"});
});

app.listen(PORT, () => {
    console.log(`The app is listening on the port ${PORT}`);
})