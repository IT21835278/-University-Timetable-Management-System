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
            facilities
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
            facilities
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

const updateHall = asyncHandler(async(req,res)=>{
    try{
        const  hall = await Hall.findOne(req.params.hallid);

        const {
            hallName,
            capacity,
            typeofhall,
            facilities
        } =hall

        hall.hallName = req.body.hallName || hallName
        hall.capacity = req.body.capacity || capacity
        hall.typeofhall = req.body.typeofhall || typeofhall
        hall.facilities = req.body.facilities || facilities

        const  updateHall = await hall.save()
        console.log("Coure updated");
        res.status(202).json(updateHall)
        

    }catch (error) {
        console.error("Error occour Updating hall:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const  deleteHall =  asyncHandler(async(req,res)=>{
    try{
        const hallid = req.params.hallid
        const  hall = await Hall.findById(hallid)
        //anousement
        await Anousement.create({
            title:`The ${hall.hallName} removed`,
            anousement:`The ${hall.hallName} ${hall.typeofhall} hall removed. we will assignt new hall for ${hall.typeofhall} `,
            semester:0,
            acYear:0,
            faculty:"all"
    
        })

        await deleteOne({_id:hallid})
    }catch (error) {
        console.error("Error occour Deleting hall:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})

module.exports = {
    createNewHall,
    getAllHalls,
    updateHall,
    deleteHall
}