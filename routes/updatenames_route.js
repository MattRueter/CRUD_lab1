const express = require("express");
const updatenamesRouter = express.Router();

updatenamesRouter.get("/", (req, res) => {
    res.send("under construction");
});


module.exports = updatenamesRouter;