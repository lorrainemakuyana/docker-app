//input passed in here 


const permissions = (number) => {
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

