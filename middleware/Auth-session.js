const { RetriveTheData } = require("../service/Auth-sessionId");

const RedtrictToLoginInUserOnly = (req, res, next) => {

    const sessionId = req.cookies?.udv;

    console.log("1. Session ID:", sessionId);

    if (!sessionId) {
       
        return res.redirect("/login");
    }

    const user = RetriveTheData(sessionId);

    console.log("2. Retrieved User:", user);

    if (!user) {
        return res.redirect("/login");
    }

    req.user = user;

    next();
};


// Authorization

//role like Admin And Memeber etc
const restrictTo =(role=[])=>{
  
    return function(req,res,next){
         // agar tum loged  in nhi to to vapas logged in page p chla jayo ga
         console.log(req.user);
         
        if(!req.user){
            return res.redirect("login")
        }
        //user ka role kya hia  include use to find inside the Array
        if(!role.includes(req.user.role)){
            return res.end("unAuthorized")
        }
        return next();
    } 
   
}

module.exports = { RedtrictToLoginInUserOnly ,restrictTo};



// bearer it only for  APIs and mobile applications.    web m use nhi hota bss samaj le 

// const RedtrictToLoginInUserOnly = (req, res, next) => {

//     const sessionId = req.header.["authantication"];

//     console.log("1. Session ID:", sessionId);

//     if (!sessionId) {
       
//         return res.redirect("/login");
//     }
                
//       const token = sessionId,split('bearer)[1]
//     const user = RetriveTheData(token);

//     console.log("2. Retrieved User:", user);

//     if (!user) {
//         return res.redirect("/login");
//     }

//     req.user = user;

//     next();
// };

// module.exports = { RedtrictToLoginInUserOnly };