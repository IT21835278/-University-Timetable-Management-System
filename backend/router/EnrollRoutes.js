const express =require("express");
const { EnrollCourse, getAllEnroll } = require("../controller/EnrollController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();


router.post("/",protect,EnrollCourse);
router.get("/",getAllEnroll);



module.exports = router;