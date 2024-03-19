const express =require("express");
const { EnrollCourse, getAllEnroll, deleteEnrollmennt } = require("../controller/EnrollController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();


router.post("/",protect,EnrollCourse);
router.get("/",getAllEnroll);
router.delete("/:tableid",deleteEnrollmennt)



module.exports = router;