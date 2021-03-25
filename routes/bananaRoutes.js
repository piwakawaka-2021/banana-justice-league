const express = require("express");
const fs = require("fs");
const read = require("../read")

const router = express.Router();

// Home
router.get("/", (req, res) => {
    read.read("./data.json", res, req, read.renderHome)
});

router.get("/form", (req, res) => {
    read.read("./data.json", res, req, read.renderForm)
});

router.get("/story", (req, res) => {
    read.read("./data.json", res, req, read.renderStory)
});


module.exports = router;