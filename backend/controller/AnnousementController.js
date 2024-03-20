const asyncHandler = require("express-async-handler")
const Anousement = require("../models/AnousementModel")
const User = require("../models/UserModule")
const Enroll = require("../models/EnrollModule")


const  createAnousement = asyncHandler(async(req,res)=>{
    try{
        const {
            title,
            anousement,
            semester,
            acYear,
            faculty
        }=req.body
    
        const  newanousement = await Anousement.create({
            title,
            anousement,
            semester,
            acYear,
            faculty
        })
    
        res.status(201).json(newanousement)
    }catch (error) {
        console.error("Error occour creating new annousement:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})





const  getAllAnousement = asyncHandler(async(req,res)=>{
    try{
        const anoousement = await Anousement.find();
        res.status(200).json(anoousement)
    }catch (error) {
    console.error("Error occour get all annousement:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}

})

const  getUserSpecificAnnousement = asyncHandler(async(req,res)=>{
    try{
        const currentEnroll = await Enroll.findOne({ refid: req.user._id }).sort({ createdAt: -1 });
        console.log(currentEnroll);

        const userAnoousement = await Anousement.find({faculty:currentEnroll.faculty , semester:currentEnroll.semester , acYear:currentEnroll.acYear});

        res.status(200).json(userAnoousement);



    }catch (error) {
    console.error("Error occour get user specific annousement:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}

})


const getAllFacultyAnnousement = asyncHandler(async(req,res)=>{
    try{
        const getAnnousement = await Anousement.find({faculty:"all" , semester:0, acYear:0})

        res.status(200).json(getAnnousement);

    }catch (error) {
    console.error("Error occour get All faculty annousement:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}

})

const  removeAnnousement = asyncHandler(async(req,res)=>{
    try{
        await Anousement.deleteOne({_id:req.params.annousementid})

    }catch (error) {
        console.error("Error occour get All faculty annousement:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }

})



module.exports = {
    getAllAnousement,
    createAnousement,
    getUserSpecificAnnousement,
    getAllFacultyAnnousement,
    removeAnnousement

}