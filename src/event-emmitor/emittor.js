var exec = require('child_process').exec;
var containerId

module.exports = function(imas) {
    return new Promise((resolve, reject) => {
        console.log('this is the hash: ' + imas.hash)
        console.log('this is getting emmited by the function' + getDockerContainerId())
        resolve()
    })
    
}

function getDockerContainerId() {
    if(!containerId) {
       exec('cat \/proc\/self\/cgroup | grep \"cpu:\/\" | sed \'s\/\\([0-9]\\):cpu:\\\/docker\\\/\/\/g\'', setContainerId)
    }
    
    return containerId
}

function setContainerId(error, stdout, stderr) { 
    if(!error) {
        containerId = stdout
    }
    console.log(stdout)
}

