const router = require("express").Router();
const passport = require("passport")

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200)/json({
            success: true,
            message: "login successful",
            user: req.user,
            
        })
    }
})