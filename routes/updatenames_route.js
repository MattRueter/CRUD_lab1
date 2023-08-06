const express = require("express");
const updatenamesRouter = express.Router();

updatenamesRouter.get("/", (req, res) => {
    res.render("form", {title: "Edit names", message: "You've gone to the UPDATE names page."})
});


module.exports = updatenamesRouter;