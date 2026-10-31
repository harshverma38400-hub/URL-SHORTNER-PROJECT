//its is only for display

const express = require("express")
const {RedtrictToLoginInUserOnly}=require("../middleware/Auth-session")

const router = express.Router()
const fs =require('fs')
const { restrictTo } = require("../middleware/Auth-session")
router.get( "/",RedtrictToLoginInUserOnly,restrictTo(["NORMAL"]),
    (req, res) => {
        return res.render("home");
    }
);


router.get("/signup",(req,res)=>{

    return res.render('SingupOfAuth')
})


router.get("/login",(req,res)=>{

    return res.render('login')
})


module.exports=router