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

// function renderProfile(err, res, req, data) {
//     if (err) console.log(err)
//     else {res.render('details', getPupFromID(data, req))}
// }

// function getPupFromID (data, req){
//     const paramID = req.params.id;
//     const pd = JSON.parse(data);
//     const puppyArr = pd.puppies;
//     const puppy = puppyArr.find((puppy) => puppy.id == paramID);

//     return puppy
// }


module.exports = {
    read,
    renderHome,
    // renderProfile
}