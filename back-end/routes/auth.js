const router = require("express").Router();
const passport = require("passport")

const CLIENT_URL = "http://localhost:3000/"
const ACCOUNT_URL = CLIENT_URL + "account"

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "login successful",
            user: req.user,
            cookies: req.cookies
        });
    }
});

router.get("login/failure", (req, res) => {
    res.status(401).json({
        success: false,
        message: "login failed",
    });
});

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: ACCOUNT_URL,
    failureRedirect: "/login/failure"
}))

module.exports = router