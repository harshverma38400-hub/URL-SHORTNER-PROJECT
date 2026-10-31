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
     role:{
        type:String,
        required:true,
        default:"NORMAL"
     },
    password:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    }
},{timestamps:true})

const Users = mongoose.model("users",UserData)

module.exports=Users