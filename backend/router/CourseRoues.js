const express =require("express");
const { CreateCourse, getAllCourses, getByIdCourse, updateCourse } = require("../controller/CourseController");
const router = express.Router();


router.post("/",CreateCourse);
router.get("/",getAllCourses);
router.get("/:courseid",getByIdCourse);
router.patch("/:courseid",updateCourse)



module.exports = router;