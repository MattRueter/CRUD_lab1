const express = require("express");
const addnamesRouter = express.Router();

addnamesRouter.get("/", (req, res) => {
    res.render("form", {title: "Add names", message: "You've gone to the ADD names page."})
});


module.exports = addnamesRouter;