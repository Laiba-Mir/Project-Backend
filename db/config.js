const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Login")
.then(() => console.log("Connected to Mongo...."))
.catch((error) => console.log("not connected"));