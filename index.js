console.clear();

const express = require('express'); 

// const cors = require('cors');

// Query functions
const getPermissions = require('getPermissions'); 
const getParityBits = require('getParityBits');

const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000',
//     exposedHeaders: [ 'Set-Cookie' ],
//     methods: ['POST', 'GET', 'DELETE', 'PATCH' ],
//     allowedHeaders: ['Content-type'],
//     preflightContinue: true,
//     credentials: true
// })); 

app.use(express.json());

app.use(function(req, res, next) {
    console.log(req.url);
    next();
})

app.post('getPermissions', getPermissions); 

app.post('getParityBits', getParityBits); 

const port = process.env.PORT || 8080; 
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
}); 

console.clear();
