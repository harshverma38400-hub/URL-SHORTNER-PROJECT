//Map JavaScript ka built-in data structure hai jo data ko key-value pairs mein store karta hai.
// const SessionIdToUserMap = new Map()


// const insertData =(id,user)=>{
//   //  set() Map ke andar data insert karta hai.
//     SessionIdToUserMap.set(id,user)
// }

// const RetriveTheData =(id,user)=>{
//     return SessionIdToUserMap.get(id,user)
// }

 
//jwt stateless

const jwt =require("jsonwebtoken")
const SecretKey = "harsh@46723"

const insertData =(user)=>{

    return jwt.sign({
      _id:user._id,
      user
    },SecretKey)    

}

const RetriveTheData =(token)=>{

  return jwt.verify(token,SecretKey)
}


module.exports={insertData,RetriveTheData}