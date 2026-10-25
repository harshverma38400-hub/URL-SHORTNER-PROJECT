const {HandlingTheSingin} =require("../controllers/usersofAuth")


const express = require("express");

const router = express.Router()



router.post("/",HandlingTheSingin)

router.get("/",(req,res)=>{
    return res.send("its working")
})

module.exports=router