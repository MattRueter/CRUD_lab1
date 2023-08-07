const express = require("express");
const _dbNames =require("../database/names");
const { genId } = require("../utils/utility_functions")
const addnamesRouter = express.Router();

addnamesRouter.get("/", (req, res) => {

    res.render("form", {
        title: "Search names", 
        heading: "You've gone to the ADD names page.", 
        route: "/addnames/addOnename",
        method: "POST",
        buttonName: "Add",
        message: null,
        names:[],
        notFoundMessage: null
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
        res.send(`${name} added.`);
    }
});

module.exports = addnamesRouter;