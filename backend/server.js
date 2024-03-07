const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const path =require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser")


//router imports
const UserRoutes = require("./router/UserRoutes")


const app = express();


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.urlencoded({extended:false}));

app.use(cors(
    {
        origin: ["http://localhost:3000","https://univercity.timetable.managemat.vercel.app"],
        credentials: true,
    }
));



//route
app.use("/api/user",UserRoutes)



//database connection
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>{
            console.log(`Server Running is port ${PORT} 🚀 `);
        })
    })
    .catch((err)=>console.log(err))