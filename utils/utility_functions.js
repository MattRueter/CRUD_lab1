const express = require("express");

function genId (DB) {

    const ids = DB.map(name => name.id);
    let newId = ids[ids.length-1] +1

    const idAlreadyExists = () =>{
        if(ids.includes(newId)){
            newId++
            idAlreadyExists()
        }else{
            console.log(newId)
            return 
        }
    }
    idAlreadyExists()
    return newId
};


 module.exports = { genId };