const express =require("express");
const { CreateCourse, getAllCourses, getByIdCourse, updateCourse, deleteCourse, getCourseBycode } = require("../controller/CourseController");
const router = express.Router();


router.post("/",CreateCourse);
router.get("/",getAllCourses);
router.get("/:courseid",getByIdCourse);
router.patch("/:courseid",updateCourse)
router.delete("/remove-course/:courceid",deleteCourse)
router.get("/get-course/:coursecode",getCourseBycode)



module.exports = router;