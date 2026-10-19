
// ./ means current folder.
// ../ means ek folder peeche.

const express = require("express")

const path = require("path")


const {connector}= require("./connecter/MongoConnect")

const urlRoute =require("./routes/url")

const StaticRoute =require("./routes/StaticRoute")

const Url = require("./models/url");

const app = express()

const port = 8000

//connection with mongo

connector("mongodb://127.0.0.1:27017/harshi")

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use("/url",urlRoute)

//staticRoute 

app.use('/',StaticRoute)

// we telling here which view engine we are using which ejs ,pug etc koi sa bhi ho sakta hai , kese use krna hai ejs ko btata hai
app.set("view engine","ejs")

// just telling ki mere file kha rakhi hai   , btaya hai ki views is folder m pda hai path k through

app.set('views' , path.resolve('./views'))

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



app.listen(port,()=>{console.log("here we go again:",port)})