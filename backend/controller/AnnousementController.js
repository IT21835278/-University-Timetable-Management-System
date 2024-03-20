const asyncHandler = require("express-async-handler")
const Anousement = require("../models/AnousementModel")


const  getAllAnousement = asyncHandler(async(req,res)=>{
    try{
        const anoousement = await Anousement.find();
        res.status(200).json(anoousement)
    }catch (error) {
    console.error("Error occour get all annousement:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}

})


module.exports = {
    getAllAnousement
}