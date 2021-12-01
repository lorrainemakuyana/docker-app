//import express from 'express'

console.clear();

const express = require('express'); 

const getPermissions = require('getPermissions'); 
const getParityBits = require('getParityBits');

const app = express();

app.use(express.json());

app.post('/getPermissions/:code', getPermissions); 

app.post('getParityBits', getParityBits); 

const port = 8080; 

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
}); 

console.clear();
