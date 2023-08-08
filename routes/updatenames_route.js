const express = require("express");
const _dbNames = require("../database/names");
const updatenamesRouter = express.Router();

updatenamesRouter.get("/", (req, res) => {
    res.render("form", {
        title: "EDIT Record",
        heading: "EDIT a record in the database.",
        buttonName: "Edit",
        message:""
    });
});

updatenamesRouter.get("/getUser/id", (req,res) =>{
    //search by ID comes here to find record before moving on 
    //to display it in the edit form
    const id = Number(req.query.nameInput);
    const record = _dbNames.filter(name => name.id === id);

    //check if doesn't exist:
    if(record.length <=0){
        res.send("no user with that ID found:");
    }else{
        res.render("form",{
            title: "EDIT Record",
            heading: "EDIT a record in the database.",
            buttonName: "Edit",
            message: "Edit below:",
            name: record[0].name,
            nationality: record[0].nationality,
            dob: record[0].dob,
            id: id,
        })
    }

});
updatenamesRouter.post("/editUser/id", (req,res) =>{
    const {id, nameInput, nationalityInput, dobInput} = req.body;
    const newRecord = {
        id: Number(id),
        name:nameInput,
        dob:dobInput,
        nationality:nationalityInput, 
    };
    //Replace old with new:
    for(let i=0; i<_dbNames.length; i++){
        if(_dbNames[i].id === newRecord.id){
            _dbNames[i] = newRecord;
            console.log("found it.");
        }
    }
    res.render("form",{
        title: "EDIT Record",
        heading: "EDIT a record in the database.",
        buttonName: "Edit",
        message: `Update: ${newRecord.name}-${newRecord.nationality}-${newRecord.dob}`
    })
});

module.exports = updatenamesRouter;