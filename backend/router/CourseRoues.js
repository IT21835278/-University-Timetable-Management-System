const express =require("express");
const { CreateCourse, getAllCourses, getByIdCourse, updateCourse, deleteCourse } = require("../controller/CourseController");
const router = express.Router();


router.post("/",CreateCourse);
router.get("/",getAllCourses);
router.get("/:courseid",getByIdCourse);
router.patch("/:courseid",updateCourse)
router.delete("/remove-course/:courceid",deleteCourse)



module.exports = router;