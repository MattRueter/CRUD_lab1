const express = require("express");
const _dbNames =require("../database/names")
const getnamesRouter = express.Router();

getnamesRouter.get("/", (req, res) => {
    const name =_dbNames[0].name
    res.render("form", {title: "Search names", message: "You've gone to the GET names page.", names:name})
    
});


module.exports = getnamesRouter;