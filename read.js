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
    else {
        const obj = JSON.parse(data)

        obj.noun1 = req.body.noun1
        obj.noun2 = req.body.noun2
        obj.noun3 = req.body.noun3
        obj.adjective4 = req.body.adjective4
        obj.adjective5 = req.body.adjective5
        obj.adjective6 = req.body.adjective6
        obj.noun7 = req.body.noun7
        obj.time_in_the_past8 = req.body.time_in_the_past8
        obj.noun9 = req.body.noun9
        obj.noun10 = req.body.noun10
        obj.noun11 = req.body.noun11
        obj.past_tense_verb13 = req.body.past_tense_verb13
        obj.adjective14 = req.body.adjective14
        obj.verb15 = req.body.verb15

        const newData = JSON.stringify(obj)

        res.render('story', obj)
    }
}


module.exports = {
    read,
    renderHome,
    renderForm,
    renderStory
}