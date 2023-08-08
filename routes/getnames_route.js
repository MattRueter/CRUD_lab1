const express = require("express");
const _dbNames =require("../database/names")
const getnamesRouter = express.Router();

getnamesRouter.get("/", (req, res) => {
    res.render("form", {
        title: "Search names", 
        heading: "Search for a record by name.", 
        route:"/getnames/getAllnames",
        method: "GET",
        buttonName: "Search",
        message: null,
        names: []
    });
});

getnamesRouter.get("/getAllnames", (req,res) => {
        const allNames =_dbNames.map(name => name);
        let nameQuery = req.query.nameInput;
        
        if(nameQuery!=""){
            res.redirect(`/getnames/getOnename/${nameQuery}`);
        }else{
            res.render("form", {
                title: "Search names", 
                heading: "You've gone to the GET names page.", 
                route:"/getnames/getAllnames",
                method: "GET",
                buttonName: "Search",
                message: "Results: All Records",
                names:allNames,
            });
        }
});

getnamesRouter.get("/getOnename/:nameQuery", (req,res) => {
    let message = null;
    let nameQuery = req.params.nameQuery
    nameQuery = nameQuery.toLowerCase()
    let name = _dbNames.filter(name => name.name.toLowerCase() == nameQuery); 
    
    if(name.length === 0){
        message = `${nameQuery} NOT FOUND IN RECORDS.`
    }else{        
        message = `Results: Records for ${nameQuery}`;
    }

    res.render("form", {
        title: "Search names", 
        heading: "You've gone to the GET names page.", 
        route:"/getnames/getAllnames",
        method: "GET",
        buttonName: "Search",
        message: message,
        names:name,
    });
});

module.exports = getnamesRouter;