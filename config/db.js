const mongoose = require("mongoose");

const config = require("config");

const db = config.get("mongoURI");
// ++++++++++++++++   setting connection using promises

// mongoose
//     .coonect(DB)
//     .then(() => {
//         console.log("db connected");
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// ++++++++++++++++ setting connection using async await

const connectDB = () => {
    try {
        mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("+++++++++++++++++DB Connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
