const express =require("express");
const { getAllTimetable, createTimeTable } = require("../controller/TimeTableController");
const router = express.Router();


router.post("/",createTimeTable);
router.get("/",getAllTimetable);




module.exports = router;