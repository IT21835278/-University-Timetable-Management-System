const asyncHandler = require("express-async-handler");
const Enroll = require("../models/EnrollModule");


const EnrollCourse = asyncHandler(async(req,res)=>{
    try{
        const {
            Sid,
            semester,
            acYear,
            faculty

        }=req.body

        const exisiting = await Enroll.findOne({Sid,semester,acYear})
        if(exisiting){
            throw new Error ("You are allready Enroll.")
        }
        
        console.log(acYear);
        const refid = req.user._id

        const enroll = await Enroll.create({
            refid,
            Sid,
            semester,
            acYear,
            faculty
        })

        res.status(201).json(enroll);


    }catch (error) {
        console.error("Error occour Enrool the course:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})

const getAllEnroll = asyncHandler(async(req,res)=>{
    try{
        const enroll = await Enroll.find();
        res.status(200).json(enroll);

    }catch (error) {
    console.error("Error occur get all Enrolls", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})




module.exports={
    EnrollCourse,
    getAllEnroll,
}