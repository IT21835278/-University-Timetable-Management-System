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

const  updateEnroll = asyncHandler(async(req,res)=>{
    try{
        const enroll = await Enroll.findById(req.params.enrollid);

        const {
            Sid,
            semester,
            acYear,
            faculty
        } = enroll

        enroll.Sid = req.body.Sid || Sid
        enroll.semester = req.body.semester || semester
        enroll.acYear = req.body.acYear || acYear
        enroll.faculty = req.body.faculty || faculty
        

        const updateenroll = await enroll.save()
        res.status(202).json(updateenroll);


    }catch (error) {
        console.error("Error occour Enrool update the course:", error);
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

const deleteEnrollmennt = asyncHandler (async(req,res)=>{
    try{
        const tableid = req.params.tableid
        const  existEnroll = await Enroll.findById(tableid);
        if(!existEnroll){
            throw new Error("This details not in databae");

        }

        await Enroll.deleteOne({_id:tableid});
        res.status(200).json({ message: 'Enrollment deleted successfully' })


    }catch (error) {
    console.error("Error occur delete Enrolls", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


module.exports={
    EnrollCourse,
    getAllEnroll,
    deleteEnrollmennt,
    updateEnroll
}