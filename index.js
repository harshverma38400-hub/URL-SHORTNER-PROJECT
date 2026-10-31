
// ./ means current folder.
// ../ means ek folder peeche.

const express = require("express")

const path = require("path")

const cookieParser = require("cookie-parser")


const {connector}= require("./connecter/MongoConnect")

//middleware

const {RedtrictToLoginInUserOnly,restrictTo} =require("./middleware/Auth-session")
//Routes
const urlRoute =require("./routes/url")

const StaticRoute =require("./routes/StaticRoute")

const UsersRoute = require("./routes/userofAuth")


const Url = require("./models/url");

const app = express()

const port = 8000

//connection with mongo

connector("mongodb://127.0.0.1:27017/harshi")

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
//app.use(RedtrictToLoginInUserOnly)

// router
app.use(
    "/url",
    RedtrictToLoginInUserOnly,
    restrictTo(["NORMAL"]),
    urlRoute
);

//staticRoute 

app.use('/',StaticRoute)

// UserRouter

app.use("/users",UsersRoute)

// we telling here which view engine we are using which ejs ,pug etc koi sa bhi ho sakta hai , kese use krna hai ejs ko btata hai
app.set("view engine","ejs")

// just telling ki mere file kha rakhi hai   , btaya hai ki views is folder m pda hai path k through

app.set('views' , path.resolve('./views'))


app.listen(port,()=>{console.log("here we go again:",port)})