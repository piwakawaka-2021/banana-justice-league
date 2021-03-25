const fs = require("fs");


function read (filepath, res, req, callback) {
    fs.readFile(filepath, (err, data) => { 
        if (err) callback(err);
        else callback(err, res, req, data)
    })
}

function renderHome(err, res, req, data) {
    if (err) console.log(err)
    const viewData = {
        pageClass: " home",
        // puppies: JSON.parse(data),
    };
    res.render("home", viewData)
}

function renderForm(err, res, req, data) {
    if (err) console.log(err)
    else {res.render('form', data)}
}

function renderStory(err, res, req, data) {
    if (err) console.log(err)
    else {res.render('story', data)}
}

module.exports = {
    read,
    renderHome,
    renderForm,
    renderStory
}