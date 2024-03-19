const asyncHandler = require("express-async-handler");
const TimeTable = require("../models/TimeTableModel");
const { json } = require("body-parser");
const Hall = require("../models/HallModel");
const Enroll = require("../models/EnrollModule");


const createTimeTable = asyncHandler(async(req,res)=>{
    try{
        const {
            faculty,
            semester,
            year,
            monday,
            tuesday,
            wednesday,
            thurseday,
            friday
        } = req.body

        const timeTableExist = await TimeTable.findOne({faculty,semester,year});
        console.log(timeTableExist);
        if(timeTableExist){
            res.status(400);
            throw new Error ("This year and semester time table alrady exist");

        }


        //monday
        if(monday){
            if (monday.details8_30to10_30 && monday.details8_30to10_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: monday.details8_30to10_30.hallId },
                    { $set: { "monday.time8_30to10_30": true } }
                );
            }

            if (monday.details10_30to12_30 && monday.details10_30to12_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: monday.details10_30to12_30.hallId },
                    { $set: { "monday.time10_30to12_30": true } }
                );
            }

            if (monday.details1_30to3_30 && monday.details1_30to3_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: monday.details1_30to3_30.hallId },
                    { $set: { "monday.time1_30to3_30": true } }
                );
            }

            if (monday.details3_30to5_30 && monday.details3_30to5_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: monday.details3_30to5_30.hallId },
                    { $set: { "monday.time3_30to5_30": true } }
                );
            }
        }


        //tuesday
        if(tuesday){
            if (tuesday.details8_30to10_30 && tuesday.details8_30to10_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: tuesday.details8_30to10_30.hallId },
                    { $set: { "tuesday.time8_30to10_30": true } }
                );
            }

            if (tuesday.details10_30to12_30 && tuesday.details10_30to12_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: tuesday.details10_30to12_30.hallId },
                    { $set: { "tuesday.time10_30to12_30": true } }
                );
            }

            if (tuesday.details1_30to3_30 && tuesday.details1_30to3_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: tuesday.details1_30to3_30.hallId },
                    { $set: { "tuesday.time1_30to3_30": true } }
                );
            }

            if (tuesday.details3_30to5_30 && tuesday.details3_30to5_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: tuesday.details3_30to5_30.hallId },
                    { $set: { "tuesday.time3_30to5_30": true } }
                );
            }
    }


        //wednesday
        if(wednesday){
            if (wednesday.details8_30to10_30 && wednesday.details8_30to10_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: wednesday.details8_30to10_30.hallId },
                    { $set: { "wednesday.time8_30to10_30": true } }
                );
            }

            if (wednesday.details10_30to12_30 && wednesday.details10_30to12_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: wednesday.details10_30to12_30.hallId },
                    { $set: { "wednesday.time10_30to12_30": true } }
                );
            }

            if (wednesday.details1_30to3_30 && wednesday.details1_30to3_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: wednesday.details1_30to3_30.hallId },
                    { $set: { "wednesday.time1_30to3_30": true } }
                );
            }

            if (wednesday.details3_30to5_30 && wednesday.details3_30to5_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: wednesday.details3_30to5_30.hallId },
                    { $set: { "wednesday.time3_30to5_30": true } }
                );
            }
        }



            //thurseday
        if(thurseday){
            if (thurseday.details8_30to10_30 && thurseday.details8_30to10_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: thurseday.details8_30to10_30.hallId },
                    { $set: { "thurseday.time8_30to10_30": true } }
                );
            }

            if (thurseday.details10_30to12_30 && thurseday.details10_30to12_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: thurseday.details10_30to12_30.hallId },
                    { $set: { "thurseday.time10_30to12_30": true } }
                );
            }

            if (thurseday.details1_30to3_30 && thurseday.details1_30to3_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: thurseday.details1_30to3_30.hallId },
                    { $set: { "thurseday.time1_30to3_30": true } }
                );
            }

            if (thurseday.details3_30to5_30 && thurseday.details3_30to5_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: thurseday.details3_30to5_30.hallId },
                    { $set: { "thurseday.time3_30to5_30": true } }
                );
            }
        }
        



        //friday
        if(friday){
            if (friday.details8_30to10_30 && friday.details8_30to10_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: friday.details8_30to10_30.hallId },
                    { $set: { "friday.time8_30to10_30": true } }
                );
            }

            if (friday.details10_30to12_30 && friday.details10_30to12_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: friday.details10_30to12_30.hallId },
                    { $set: { "friday.time10_30to12_30": true } }
                );
            }

            if (friday.details1_30to3_30 && friday.details1_30to3_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: friday.details1_30to3_30.hallId },
                    { $set: { "friday.time1_30to3_30": true } }
                );
            }

            if (friday.details3_30to5_30 && friday.details3_30to5_30.hallId) {
                await Hall.findOneAndUpdate(
                    { hallName: friday.details3_30to5_30.hallId },
                    { $set: { "friday.time3_30to5_30": true } }
                );
            }
        }
        

        

        const timetable= await TimeTable.create({
            faculty,
            semester,
            year,
            monday,
            tuesday,
            wednesday,
            thurseday,
            friday
        })
        console.log("Time table created");
        res.status(201).json(timetable);

    }catch (error) {
    console.error("Error occour Create time table:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
}
})


const getAllTimetable  = asyncHandler(async(req,res)=>{
    try{
        const timetable = await TimeTable.find();
        res.status(200).json(timetable);

    }catch (error) {
    console.error("Error occur get all time tables:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const getByIdTimetable = asyncHandler(async(req,res)=>{
    try{
        const timetable = await TimeTable.findById(req.params.timetableid);
        res.status(200).json(timetable);

    }catch (error) {
    console.error("Error occur get by id time tables:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const getUserSpecificTimetable =asyncHandler(async(req,res)=>{
    try{

        const currentEnroll = await Enroll.findOne({ refid: req.user._id }).sort({ createdAt: -1 });

        const timetable = await TimeTable.findOne({faculty : currentEnroll.faculty, semester : currentEnroll.semester, year : currentEnroll.acYear});

        res.json(timetable);



    }catch (error) {
    console.error("Error occur get by id time tables:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})




//time table delete
const deleteTimetable = asyncHandler(async(req,res)=>{
    const tableid = req.params.tableid
    const timetable = await TimeTable.findById(tableid);

    if(timetable.monday){
        if (timetable.monday.details8_30to10_30 && timetable.monday.details8_30to10_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.monday.details8_30to10_30.hallId },
                { $set: { "monday.time8_30to10_30": false } }
            );
        }

        if (timetable.monday.details10_30to12_30 && timetable.monday.details10_30to12_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.monday.details10_30to12_30.hallId },
                { $set: { "monday.time10_30to12_30": false } }
            );
        }

        if (timetable.monday.details1_30to3_30 && timetable.monday.details1_30to3_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.monday.details1_30to3_30.hallId },
                { $set: { "monday.time1_30to3_30": false } }
            );
        }

        if (timetable.monday.details3_30to5_30 && timetable.monday.details3_30to5_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.monday.details3_30to5_30.hallId },
                { $set: { "monday.time3_30to5_30": false } }
            );
        }
    }


    //tuesday
    if(timetable.tuesday){
        if (timetable.tuesday.details8_30to10_30 && timetable.tuesday.details8_30to10_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.tuesday.details8_30to10_30.hallId },
                { $set: { "tuesday.time8_30to10_30": false } }
            );
        }

        if (timetable.tuesday.details10_30to12_30 && timetable.tuesday.details10_30to12_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.tuesday.details10_30to12_30.hallId },
                { $set: { "tuesday.time10_30to12_30": false } }
            );
        }

        if (timetable.tuesday.details1_30to3_30 && timetable.tuesday.details1_30to3_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.tuesday.details1_30to3_30.hallId },
                { $set: { "tuesday.time1_30to3_30": false } }
            );
        }

        if (timetable.tuesday.details3_30to5_30 && timetable.tuesday.details3_30to5_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.tuesday.details3_30to5_30.hallId },
                { $set: { "tuesday.time3_30to5_30": false } }
            );
        }
}


    //wednesday
    if(timetable.wednesday){
        if (timetable.wednesday.details8_30to10_30 && timetable.wednesday.details8_30to10_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.wednesday.details8_30to10_30.hallId },
                { $set: { "wednesday.time8_30to10_30": false } }
            );
        }

        if (timetable.wednesday.details10_30to12_30 && timetable.wednesday.details10_30to12_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.wednesday.details10_30to12_30.hallId },
                { $set: { "wednesday.time10_30to12_30": false } }
            );
        }

        if (timetable.wednesday.details1_30to3_30 && timetable.wednesday.details1_30to3_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.wednesday.details1_30to3_30.hallId },
                { $set: { "wednesday.time1_30to3_30": false } }
            );
        }

        if (timetable.wednesday.details3_30to5_30 && timetable.wednesday.details3_30to5_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.wednesday.details3_30to5_30.hallId },
                { $set: { "wednesday.time3_30to5_30": false } }
            );
        }
    }



        //thurseday
    if(timetable.thurseday){
        if (timetable.thurseday.details8_30to10_30 && timetable.thurseday.details8_30to10_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.thurseday.details8_30to10_30.hallId },
                { $set: { "thurseday.time8_30to10_30": false } }
            );
        }

        if (timetable.thurseday.details10_30to12_30 && timetable.thurseday.details10_30to12_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.thurseday.details10_30to12_30.hallId },
                { $set: { "thurseday.time10_30to12_30": false } }
            );
        }

        if (timetable.thurseday.details1_30to3_30 && timetable.thurseday.details1_30to3_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.thurseday.details1_30to3_30.hallId },
                { $set: { "thurseday.time1_30to3_30": false } }
            );
        }

        if (timetable.thurseday.details3_30to5_30 && timetable.thurseday.details3_30to5_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.thurseday.details3_30to5_30.hallId },
                { $set: { "thurseday.time3_30to5_30": false } }
            );
        }
    }
    



    //friday
    if(timetable.friday){
        if (timetable.friday.details8_30to10_30 && timetable.friday.details8_30to10_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.friday.details8_30to10_30.hallId },
                { $set: { "friday.time8_30to10_30": false } }
            );
        }

        if (timetable.friday.details10_30to12_30 && timetable.friday.details10_30to12_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.friday.details10_30to12_30.hallId },
                { $set: { "friday.time10_30to12_30": false } }
            );
        }

        if (timetable.friday.details1_30to3_30 && timetable.friday.details1_30to3_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: friday.details1_30to3_30.hallId },
                { $set: { "friday.time1_30to3_30": false } }
            );
        }

        if (timetable.friday.details3_30to5_30 && timetable.friday.details3_30to5_30.hallId) {
            await Hall.findOneAndUpdate(
                { hallName: timetable.friday.details3_30to5_30.hallId },
                { $set: { "friday.time3_30to5_30": false } }
            );
        }
    }

    await TimeTable.deleteOne({_id:tableid});

    res.status(200).json({message: "Time table deleted Successful"})


})


module.exports = {
    createTimeTable,
    getAllTimetable,
    getByIdTimetable,
    getUserSpecificTimetable,
    deleteTimetable
}
