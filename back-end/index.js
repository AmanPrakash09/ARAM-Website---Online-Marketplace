const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors")
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth")
const mysql = require("mysql2")
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "aram",
})

app.use(express.json());

app.use(
    cookieSession({name : "session", keys: ["aram"], maxAge: 24 * 60 * 60 * 100})
);

app.use(passport.initialize());
app.use(passport.session());

// app.use(cors({
//     origin: ["http://localhost:3000", "https://www.a-ramcreatives.com"],
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
// }));

app.use(cors({
    origin: ["https://www.a-ramcreatives.com", "https://aram-website-online-marketpl-git-30e5ad-amans-projects-ba11e8b4.vercel.app", "https://aram-website-online-marketplace-client-h3efsyfr4.vercel.app"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
// }));

app.use("/auth", authRoute);

app.get("/", (req,res) => {
    console.log("Received request at /");
    res.json("this is the back-end speaking")
})

app.get("/rugs", (req, res) => {
    console.log("Received request at /rugs");
    const q = "SELECT * FROM rugs"
    db.query(q,(err,data) => {
        if (err) {
            console.error("Error fetching rugs:", err);
            return res.json(err);
        }
        console.log("Rugs fetched successfully");
        return res.json(data)
    })
})

app.post("/users", (req, res) => {
    const q = "INSERT INTO users(`user_id`,`provider`) VALUES (?)";
    const values = [
        req.body.user_id,
        req.body.provider,
    ]

    db.query(q,[values], (err, data) => {
        if (err) {
            console.log("Error adding user! They might already exist in DB.");
            return res.json(err)
        }
        console.log("User added successfully");
        console.log("user added")
        return res.json("User successfully added to the database!")
    })
})

app.post("/saveItem", (req, res) => {
    const q = "INSERT INTO user_collections(`user_id`,`rug_name`) VALUES (?)";
    const values = [
        req.body.user_id,
        req.body.rug_name,
    ]

    db.query(q,[values], (err, data) => {
        if (err) {
            console.log("item dailed to add to the user");
            return res.json(err);
        }
        console.log("item added to the user")
        return res.json("Item was successfully added to the user!")
    })
})

app.get("/allCollections", (req, res) => {
    const q = "SELECT * FROM user_collections"
    db.query(q,(err,data) => {
        if (err) {
            console.log("Error getting all user collections!");
            return res.json(err);
        }
        console.log("Got all user collections!");
        return res.json(data)
    })
})

app.get("/myCollection", (req, res) => {
    // get user_id from query
    const user_id = req.query.user_id;

    if (!user_id) {
        console.log("No user!");
        return res.status(400).json({ error: "user_id is required" });
    }

    const q = "SELECT rug_name FROM user_collections WHERE user_id = ?";
    
    db.query(q, [user_id], (err, data) => {
        if (err) {
            console.log("Error getting rugs from user's collections!");
            return res.json(err);
        }

        console.log("Got all rugs from user's collections!");
        return res.json(data);
    });
});

app.delete("/deleteItem", (req, res) => {
    const user_id = req.query.user_id;
    const rug_name = req.query.rug_name;

    if (!user_id || !rug_name) {
        return res.status(400).json({ error: "user_id and rug_name are required" });
    }

    const q = "DELETE FROM user_collections WHERE user_id = ? AND rug_name = ?";

    db.query(q, [user_id, rug_name], (err, data) => {
        if (err) {
            console.log("Error deleting rug from user collections!");
            return res.json(err);
        }

        return res.json({ message: "Item successfully deleted from the user's collection" });
    });
});


app.listen(5000, ()=> {
    console.log("server is running!")
})