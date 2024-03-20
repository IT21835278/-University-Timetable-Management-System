const express =require("express");
const { getAllAnousement } = require("../controller/AnnousementController");
const router = express.Router();



router.get("/",getAllAnousement);





module.exports = router;