const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("get /")
    res.send('OS Mini Project 4 - Lorraine Makuyana & Hephzibah Emereole')
})

/***************************** GET PERMISSIONS ****************************************/
app.post(`/permissions?code=${code}`, getPermissions); 

app.post('/permissions/:code', (req, res) => {
        console.log("Getting permissions...")
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
/***************************** END OF GET PERMISSIONS ****************************************/


/***************************** GET PARITY BITS ***********************************************/




/***************************** END OF GET PARITY BITS ***********************************************/



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})