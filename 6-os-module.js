// we use require('something') and not require('./something') it is built in moduke
const os = require('os')

// we can find out info about current user
const user = os.userInfo()
console.log(user)

// this method returs the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)


// some other built-in modules -- just a few of them 

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)