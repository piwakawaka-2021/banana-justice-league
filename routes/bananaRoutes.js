const express = require("express");
const fs = require("fs");
const read = require("../read")

const router = express.Router();

// Home
router.get("/", (req, res) => {
    read.read("./data.json", res, req, read.renderHome)
});


module.exports = router;