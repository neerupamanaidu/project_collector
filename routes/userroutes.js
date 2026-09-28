const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    res.json({
        message: "User created successfully"
    });
});

router.get("/", (req, res) => {
    res.json({
        message: "User route working"
    });
});

module.exports = router;