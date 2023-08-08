const express = require("express");
const _dbNames =require("../database/names");
const { genId } = require("../utils/utility_functions")
const addnamesRouter = express.Router();

addnamesRouter.get("/", (req, res) => {
    res.render("form", {
        title: "ADD Record",
        heading: "Add a name to the database.",
        route: "/addnames/addOnename",
        method: "POST",
        buttonName: "Add",
    });
});

addnamesRouter.post("/addOnename", (req,res) => {
    const name = req.body.nameInput;
    const dob = req.body.dobInput;
    const nationality = req.body.nationalityInput;

    if(name === "" || dob === "" || nationality === ""){
        res.send("Form empty. Go back and write a name to add.")
    }else{
        const newRecord = {id:genId(_dbNames), name, nationality, dob};
        _dbNames.push(newRecord);
 
        res.status(201).redirect(`/addnames/addOnename/${name}`);
    }
});
addnamesRouter.get("/addOnename/:nameAdded/", (req,res) => {
    const name = req.params.nameAdded

    res.render("form", {
        route: "/addnames/addOnename",
        method: "POST",
        buttonName: "Add",
        message: `${name} added to records.`,
    });
});

module.exports = addnamesRouter;