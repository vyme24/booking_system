const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./libs/connectDB");
dotenv.config({})

const HOST = process.env.HOST;
const PORT = process.env.PORT;

connectDB();

//app
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())


//app routing
app.get("/",(req,res) => {
    res.send("Api working!")
})


const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes)



//listen server
app.listen(PORT,HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});