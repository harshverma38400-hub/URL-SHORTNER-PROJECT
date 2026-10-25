const Users = require("../models/userofAuth")


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

module.exports={HandlingTheSingin}