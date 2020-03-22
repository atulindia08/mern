const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("API is running..");
});

// Define routes

app.use("/api/users", require("./api/users"));
app.use("/api/auth", require("./api/auth"));
app.use("/api/profile", require("./api/profile"));
app.use("/api/posts", require("./api/posts"));

app.listen(PORT, () => console.log(`server started at ${PORT}`));
