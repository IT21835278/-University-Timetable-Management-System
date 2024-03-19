const asyncHandler = require("express-async-handler");
const Hall = require("../models/HallModel");
const { json } = require("body-parser");
const { models } = require("mongoose");


const createNewHall = asyncHandler(async(req,res)=>{
    try{
        const {
            hallName,
            capacity,
            typeofhall,
        } =req.body
    
        const  hallexsits = await Hall.findOne({hallName:hallName})
        if(hallexsits){
            res.status(400);
            throw new Error ("This hall details allrady existin in database")
        }
    
        const hall = await Hall.create({
            hallName,
            capacity,
            typeofhall,
        })

        res.status(201).json(hall);
    }catch (error) {
        console.error("Error occour adding hall:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }

})



const getAllHalls = asyncHandler(async(req,res)=>{
    try{
        const  hall = await Hall.find();

        res.status(200).json(hall)
    }catch (error) {
        console.error("Error occour getting all hall:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }


})

module.exports = {
    createNewHall,
    getAllHalls,
}