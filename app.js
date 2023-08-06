const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 5000;
//IMPORT ROUTES:
const getnamesRouter = require("./routes/getnames_route");
const addnamesRouter = require("./routes/addnames_route");
const updatenamesRouter = require("./routes/updatenames_route");
const deletenamesRouter = require("./routes/deletenames_route");
//IMPORT "DATABASE":
const _dbNames = require("./database/names");


//MIDDLEWARE MOUNTING:
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.static("./"))
app.use(morgan("tiny"));

//SET VIEW ENGINE:
app.set('view engine', 'pug');


//ROUTES:-------------------------------------------------------------------------------------
//Loads index.pug.-------
app.get("/", (req,res) => {
    res.render("index", { title: "Hey", heading: "Welcome to my CRUD app."});
});

//PAGES routes-------
app.use("/getnames", getnamesRouter);
app.use("/addnames", addnamesRouter);
app.use("/editnames", updatenamesRouter);
app.use("/deletenames", deletenamesRouter);

//RUN SERVER:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
