const express =require("express");
const { getAllTimetable, createTimeTable, getUserSpecificTimetable } = require("../controller/TimeTableController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");


router.post("/",createTimeTable);
router.get("/",getAllTimetable);
router.get("/student-timetable",protect,getUserSpecificTimetable);





module.exports = router;