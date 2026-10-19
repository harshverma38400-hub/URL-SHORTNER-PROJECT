const Url = require("../models/url");
const nanoId = require('nano-id');

const handleGenerateUrlShort = async (req, res) => {
    try {
        // bss body ma url le rha hai 
        const { url } = req.body;

        // Validate URL
        if (!url) {
            return res.status(400).json({
                error: "URL is required"
            });
        }

        // Generate short ID
        const shortId = nanoId(8);

        // Save in MongoDB
        await Url.create({
            ShortID: shortId,
            redirectUrl: url,
            trackHistory: []
        });

        // Send response
         return res.render("home",{
            id:shortId
        })

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Internal server error"
        });
    }
}

const HandleAnalysis = async (req, res) => {
    
        const ShortId = req.params.shortID;

        const result = await Url.findOne({
            ShortID: ShortId
        });


        return res.json({
            totalClick: result.trackHistory.length
        });


    }

    module.exports ={handleGenerateUrlShort,HandleAnalysis}