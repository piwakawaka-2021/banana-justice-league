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

router.post("/story", (req, res) => {
    read.read("./data.json", res, req, read.renderStory)
});




module.exports = router;



//MADLIIB ROUTES
//ROUTES

// server.get("/compliment", (request, response) => {
//     response.send("<h1>You are amazing!!</h1>");
// });

// server.get("/profile", (request, response) => {
//     const name = request.query.name;
//     response.sendFile(__dirname + "/" + name + ".html");
// });

// server.get("/profiles/:id", (request, response) => {
//     const name = { 1: "silvia", 2: "sampson" };
//     const id = request.params.id;
//     response.sendFile(__dirname + "/" + name[id] + ".html");
// });

// server.post('/madlib', (req, res) => {
//     console.log(req.body)
//     res.send("<h1>I love " + req.body.noun + " and I am a " + req.body.adjective + " person</h1>")
// }) 