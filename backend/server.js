const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const path =require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser")


//router imports
const UserRoutes = require("./router/UserRoutes")
const CourseRoutes = require("./router/CourseRoues")
const  TimeTableroutes =require("./router/TimetableRoutes")
const  EnrollRoutes = require("./router/EnrollRoutes")
const HallRouter = require("./router/HallRoutes")


const app = express();


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(
    {
        origin: ["http://localhost:3000","https://univercity.timetable.managemat.vercel.app"],
        credentials: true,
    }
));



//route
app.use("/api/user",UserRoutes)
app.use("/api/course",CourseRoutes)
app.use("/api/time-table",TimeTableroutes)
app.use("/api/enroll",EnrollRoutes)
app.use("/api/hall", HallRouter)



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