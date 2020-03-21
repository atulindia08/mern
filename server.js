const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("API is running..");
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
