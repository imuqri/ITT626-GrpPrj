const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")

dotenv.config();

//connect database 
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connection Succeful!"))
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);  
app.use("/api/products", productRoute);
 
app.use(express.static("public")); // Serve static files from the "public" directory

// Redirect to the login page when accessing the root URL
app.get("/", (req, res) => {
  res.redirect("/login.html");
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is running");
})