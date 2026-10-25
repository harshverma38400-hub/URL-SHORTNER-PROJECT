const { default: mongoose } = require("mongoose")

 const UrlSchema = new mongoose.Schema({
    ShortID:{
        type:String,
        unique:true,
        required:true
    },
    //orginal url
    redirectUrl:{
        type:String,
        required:true
    },
    // it just tell about how many it will be clicked
    
     trackHistory:[{timestamp:{ type:Number}}]
     
 },{timestamps:true})

 const Url = new mongoose.model("Url",UrlSchema)

 module.exports= Url