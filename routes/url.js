const express = require("express");

const {
    handleGenerateUrlShort,
    HandleAnalysis
} = require("../controllers/url");

const Url = require("../models/url");

const router = express.Router();

// Generate short URL
router.post("/", handleGenerateUrlShort);

// URL analysis
router.get("/analysis/:shortID", HandleAnalysis);

// Redirect to original URL
router.get("/:ShortID", async (req, res) => {
    
        const shortid = req.params.ShortID;

        const entry = await Url.findOneAndUpdate(
            { ShortID: shortid },
            {
                //MongoDB mein $push ka use array ke andar naya element add karne ke liye hota hai.
                $push: {
                    trackHistory: {
                        timestamp: Date.now()
                    }
                }
            },
        );
        //Ab Express browser ko redirect response bhejta hai, jisme original URL par jaane ka instruction hota hai.
        return res.redirect(entry.redirectUrl);

    } 
);



// app.get('/home' ,async (req,res)=>{
//     const allUrl = await Url.find({})
//     return res.render("home", {URLss:allUrl})
// })


// app.get("/:ShortID", async (req, res) => {
//         const shortid = req.params.ShortID;

//         const entry = await Url.findOneAndUpdate(
//             { ShortID: shortid },
//             {
//                 $push: {
//                     trackHistory: {
//                         timestamp: Date.now()
//                     }
//                 }
//             },
           
//         )


//         return res.redirect(entry.redirectUrl); }   ) 

module.exports = router;