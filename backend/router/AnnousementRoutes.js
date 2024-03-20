const express =require("express");
const { getAllAnousement, createAnousement, getUserSpecificAnnousement, getAllFacultyAnnousement, removeAnnousement } = require("../controller/AnnousementController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();


router.post("/",createAnousement);
router.get("/",getAllAnousement);
router.get("/user-annousement",protect,getUserSpecificAnnousement)
router.get("/get-annousement/:annousementid",getAllFacultyAnnousement)
router.delete("/",removeAnnousement)






module.exports = router;