//input passed in here 

function getPermissions(req, res) {
    
    let n = req.params.code

    let permissions = {}; 

    let str = n.toString(); 
    permissions.owner = getUserPermissions(str[0])
    permissions.group = getUserPermissions(str[1])
    permissions.other = getUserPermissions(str[2])
    
    res.send(permissions);
}

const getUserPermissions = (number) => {
    let binaryEq = parseInt(number, 2)
    switch (binaryEq) {        
        case 1: 
            return ['execute']

        case 10: 
            return ['write']
        
        case 11: 
            return ['write', 'execute']
        
        case 100: 
            return ['read']
        
        case 101: 
            return ['read', 'execute']
        
        case 110: 
            return ['read', 'write']

        case 111: 
            return ['read', 'write', 'execute']
        
        default:
            return []
    }
}

module.exports = getPermissions