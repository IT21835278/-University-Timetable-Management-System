const express =require("express");
const { registerUser, loginUser, logout, getAllUser, getUserById, deleteUser } = require("../controller/UserController");
const router = express.Router();


router.post("/register",registerUser);
router.post("/",loginUser);
router.get("/",logout)
router.get("/all-users",getAllUser)
router.get("/get-user/:userId",getUserById)
// router.get("/get-single-user",protect,getUser)
router.delete("/:userid",deleteUser)


module.exports = router;