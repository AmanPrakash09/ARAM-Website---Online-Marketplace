const router = require("express").Router();
const passport = require("passport")

const CLIENT_URL = "https://aram-website-online-marketplace-client.vercel.app/"
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

router.get("/login/failure", (req, res) => {
    console.error("Login failure occurred");
    res.status(401).json({
        success: false,
        message: "login failed",
    });
});

router.get("/logout", (req, res) => {
    req.logOut();
    console.log("User logged out");
    res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// router.get("/google/callback", passport.authenticate("google", {
//     successRedirect: ACCOUNT_URL,
//     failureRedirect: "/login/failure"
// }), (req, res) => {
//     console.log("Google callback reached");
// });

router.get("/google/callback", (req, res, next) => {
    console.log("Google callback initiated");
    passport.authenticate("google", (err, user, info) => {
        console.log("Inside passport.authenticate callback");
        if (err) {
            console.error("Error in authentication:", err);
            return next(err);
        }
        if (!user) {
            console.error("User not authenticated");
            return res.redirect("/login/failure");
        }
        console.log("User authenticated:", user);
        req.logIn(user, (err) => {
            if (err) {
                console.error("Error in login:", err);
                return next(err);
            }
            console.log("Login successful");
            return res.redirect(ACCOUNT_URL);
        });
    })(req, res, next);
});


router.get("/github", passport.authenticate("github", { scope: ['user:email'] }));

router.get("/github/callback", passport.authenticate("github", {
    successRedirect: ACCOUNT_URL,
    failureRedirect: "/login/failure"
}), (req, res) => {
    console.log("GitHub callback reached");
});

router.get("/facebook", passport.authenticate("facebook", { scope: ['email'] }));

router.get("/facebook/callback", passport.authenticate("facebook", {
    successRedirect: ACCOUNT_URL,
    failureRedirect: "/login/failure"
}), (req, res) => {
    console.log("Facebook callback reached");
});

module.exports = router