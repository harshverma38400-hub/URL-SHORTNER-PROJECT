const { RetriveTheData } = require("../service/Auth-sessionId");

const RedtrictToLoginInUserOnly = (req, res, next) => {

    const sessionId = req.cookies?.udv;

    console.log("1. Session ID:", sessionId);

    if (!sessionId) {
        console.log("Cookie nahi mili");
        return res.redirect("/login");
    }

    const user = RetriveTheData(sessionId);

    console.log("2. Retrieved User:", user);

    if (!user) {
        console.log("Session ID se user nahi mila");
        return res.redirect("/login");
    }

    req.user = user;

    console.log("3. Authentication successful");

    next();
};

module.exports = { RedtrictToLoginInUserOnly };