const express = require("express");
const deletenamesRouter = express.Router();

deletenamesRouter.get("/", (req, res) => {
    res.render("form", {title: "Delete names", message: "You've gone to the DELETE names page."})
});


module.exports = deletenamesRouter;