const router = require("express").Router();
const passport = require("passport")

const CLIENT_URL = "https://www.a-ramcreatives.com/"
// const CLIENT_URL = "https://aram-website-online-marketpl-git-30e5ad-amans-projects-ba11e8b4.vercel.app/"
// const CLIENT_URL = "http://localhost:3000/"
const ACCOUNT_URL = CLIENT_URL + "account"

router.get("/login/success", (req, res) => {
    console.log("Received successful login request");
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "login successful",
            user: req.user,
            cookies: req.cookies
        });
    }
});

router.get("/login/failure", (req, res) => {
    console.log("Received login failure request");
    res.status(401).json({
        success: false,
        message: "login failed",
    });
});

router.get("/logout", (req, res) => {
    console.log("Received logout request");
    req.logOut();
    res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: ACCOUNT_URL,
    failureRedirect: "/login/failure"
}), (req, res) => {
    console.log("Google callback completed");
    res.redirect(ACCOUNT_URL);
});

router.get("/github", passport.authenticate("github", { scope: ['user:email'] }));

router.get("/github/callback", passport.authenticate("github", {
    successRedirect: ACCOUNT_URL,
    failureRedirect: "/login/failure"
}))

router.get("/facebook", passport.authenticate("facebook", { scope: ['email'] }));

router.get("/facebook/callback", passport.authenticate("facebook", {
    successRedirect: ACCOUNT_URL,
    failureRedirect: "/login/failure"
}))

module.exports = router