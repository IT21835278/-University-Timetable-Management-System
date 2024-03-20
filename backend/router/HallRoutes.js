const express =require("express");
const { createNewHall, getAllHalls, updateHall, deleteHall } = require("../controller/HallController");
const router = express.Router();


router.post("/",createNewHall);
router.get("/",getAllHalls);
router.patch("/:hallid",updateHall);
router.delete("/:hallid",deleteHall)




module.exports = router;