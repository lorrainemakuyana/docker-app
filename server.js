'use strict';
//const parity = require('parity');
const express = require('express');


const myFunction = require('./getPermissions.js')
//const myFunction2 = require('./parity.js')

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/permissions/', (req, res) => {
  const code = req.query.code;
  let result = myFunction.permissions(code);

  res.send(`The code you entered is ${result}`);
});

app.get('/parity/:b1/:b2/:b3/:b4', (req,res) => {
    let parityVal = "";
    console.log(req.params)
    for (let i = 0; i < 2; i++){
        let bitval = parseInt(req.params.b1[i]) ^ parseInt(req.params.b2[i]) ^ parseInt(req.params.b3[i]) ^ parseInt(req.params.b4[i]); 
        parityVal += bitval.toString();
    }
    res.send(parityVal);
})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);