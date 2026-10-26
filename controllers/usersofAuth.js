const Users = require("../models/userofAuth")
 const  { v4 : uuidv4 } = require("uuid")
 const {insertData,RetriveTheData} =require("../service/Auth-sessionId")


const HandlingTheSingin=async(req,res)=>{

    const {name,email,password}= req.body
       //create() this is method database mein document insert karta hai.
    await  Users.create({
        name,
        email,
        password
    })
    return res.render("home")
}

const HandleLogin =async(req,res)=>{

    const {name,password}= req.body
        
    const Userss = await  Users.findOne({ name,password})

    if(!Userss){
         return res.render("login",{
            error:"invalid data"
         })
    }


    // const SessionId =uuidv4()

    //insertData(SessionId,Userss)

       const token =insertData(Userss)
    res.cookie("udv",token)

  return res.redirect("/")


}

module.exports={HandlingTheSingin,HandleLogin}