const express = require("express");
const _dbNames = require("../database/names");
const deletenamesRouter = express.Router();

deletenamesRouter.get("/", (req, res) => {
    res.render("form", {
        title: "DELETE names", 
        heading: "DELETE:Use record id to delete.", 
        route:`/deletenames/id`,
        method: "POST",
        buttonName: "Delete",
        message: null,
        names: []
    });
});

deletenamesRouter.post("/id", (req,res) => {
    //
    let index;
    let id = Number(req.body.nameInput);
    let deletedName = _dbNames.filter(name => name.id === id);

    if(deletedName.length >0){
        //remove record from _dbNames:
        _dbNames.forEach((record) => {
            if(record.id === id){
                index = _dbNames.indexOf(record)
                _dbNames.splice(index,1);
            }
        });
        res.render("form", {
            title: "DELETE names", 
            heading: "DELETE: Type record's id in.", 
            route:`/deletenames/id`,
            method: "POST",
            buttonName: "Delete",
            message: "The Following has been deleted:",
            names: deletedName
        });
    }else{
        res.render("form", {
            title: "DELETE names", 
            heading: "DELETE: Type record's id in.", 
            route:`/deletenames/id`,
            method: "POST",
            buttonName: "Delete",
            message: `Can't find a user with id:${id}`,
            names: [],
        });
    }
});



module.exports = deletenamesRouter;