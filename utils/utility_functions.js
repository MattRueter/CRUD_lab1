const express = require("express");

function genId (DB) {
    const newId = DB.length
    return newId
};

function findById ( DB, id){
    const record = DB.filter(item => item.id === id);
    if(record.length === 0){
        return null
    }else{
        return record
    }
};

 module.exports = { genId, findById };