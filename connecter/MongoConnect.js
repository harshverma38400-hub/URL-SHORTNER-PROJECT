const { default: mongoose } = require("mongoose")

const connector =(url)=>{

    return mongoose
    .connect(url)
    .then(()=>{console.log("mongo connected");})
    .catch((err)=>{console.log("there is problem in connection:",err);
    })
}

module.exports={connector}