//its is only for display

const express = require("express")

const router = express.Router()
const fs =require('fs')

router.get('/',(req,res)=>{

    return res.render('home')
})


router.get("/signup",(req,res)=>{

    return res.render('SingupOfAuth')
})



module.exports=router