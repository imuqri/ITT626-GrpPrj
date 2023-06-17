const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();

//connect database 
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connection Succeful!"))
    .catch((err) => {
        console.log(err);
    });


app.use("/api/user", userRoute);   

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running");
})