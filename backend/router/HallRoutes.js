const express =require("express");
const { createNewHall, getAllHalls } = require("../controller/HallController");
const router = express.Router();


router.post("/",createNewHall);
router.get("/",getAllHalls);



module.exports = router;