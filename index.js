const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('OS Mini Project 4 - Lorraine Makuyana & Hephzibah Emereole')
})

app.post('/permissions/:code', (req, res) => {
        let n = req.params.code
        let permissions = {}; 
        let str = n.toString();
        permissions.owner = getUserPermissions(str[0])
        permissions.group = getUserPermissions(str[1])
        permissions.other = getUserPermissions(str[2])
        res.send(permissions);
    }
)

const getUserPermissions = (number) => {
    switch (number) {        
        case "1": 
            return ['execute']

        case "2": 
            return ['write']
        
        case "3": 
            return ['write', 'execute']
        
        case "4": 
            return ['read']
        
        case "5": 
            return ['read', 'execute']
        
        case "6": 
            return ['read', 'write']

        case "7": 
            return ['read', 'write', 'execute']
        
        default:
            return []
    }
}

app.post('/parity/:b1/:b2/:b3/:b4', (req,res) => {
    let parityVal = ""
    let response = {}
    for (let i = 0; i < 2; i++){
        let bitval = parseInt(req.params.b1[i]) ^ parseInt(req.params.b2[i]) ^ parseInt(req.params.b3[i]) ^ parseInt(req.params.b4[i])
        parityVal += bitval.toString()
    }
    response.parity = parityVal
    res.send(response)
})

app.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`)
})