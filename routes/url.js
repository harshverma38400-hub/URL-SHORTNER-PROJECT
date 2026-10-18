const express = require("express")

const {handleGenerateUrlShort,HandleAnalysis} =require("../controllers/url")
const router = express.Router()


router.post("/",handleGenerateUrlShort)

router.get("/analysis/:shortID",HandleAnalysis)



module.exports=router