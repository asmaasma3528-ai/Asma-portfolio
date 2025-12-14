import express from "express";

const app = express();
const PORT = 1500;

app.get("/", (req, res) => {
    res.send("This is my server port running 😍");
});

app.listen(PORT, () => {
    console.log("The app is listening on the port 1500");
})