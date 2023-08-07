const express = require("express");
const deletenamesRouter = express.Router();

deletenamesRouter.get("/", (req, res) => {
    res.send("under construction");
});


module.exports = deletenamesRouter;