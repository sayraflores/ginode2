const express =require('express');
const http = require('http');
let fs = require('fs');
const data = fs.readFileSync('./employees.json');
const dataStr = JSON.parse(data);
const app = express ();

function idCheck(res, data, idReq){
    for(let i = 0; i< data.length; i++) {
        if(data[i].idCheck === idReq) {
            return res.send(data[i]);
        }
    }
    return res.status(404).send('Employee ID not found')
}