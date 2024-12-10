var os = require('os')

function osInfo(req,res,next){
    res.json({
        hostname: os.hostname(),
        type: os.type(),
        platform : os.platform()
    });
}

function cpus(req,res,next){
    res.json({
        cpus:os.cpus()
    })
}

function cpusById(req,res,next){
    const id = req.params.id;
    const cpus = os.cpus();
   res.json(cpus[id])
   
}

module.exports = { osInfo , cpus , cpusById}