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
                $push: {
                    trackHistory: {
                        timestamp: Date.now()
                    }
                }
            },
        );

        return res.redirect(entry.redirectUrl);

    } 
);

module.exports = router;