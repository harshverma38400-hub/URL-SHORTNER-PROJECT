
// ./ means current folder.
// ../ means ek folder peeche.

const express = require("express")

const {connector}= require("./connecter/MongoConnect")

const urlRoute =require("./routes/url")

const Url = require("./models/url");

const app = express()

const port = 8000

//connection with mongo

connector("mongodb://127.0.0.1:27017/harshi")

// middleware
app.use(express.json());

// router
app.use("/url",urlRoute)

app.get("/:ShortID", async (req, res) => {
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
           
        )


        return res.redirect(entry.redirectUrl);
 }   )



app.listen(port,()=>{console.log("here we go again:",port)})