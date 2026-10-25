const mongoose = require("mongoose")

const UserData = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Users = mongoose.model("users",UserData)

module.exports=Users