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

module.exports = { RedtrictToLoginInUserOnly };



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