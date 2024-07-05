const express=require("express")
const router = express.Router();

const {CreateUser}=require("../controller/registerController")
//post request

router.post("/register",CreateUser)


module.exports=router