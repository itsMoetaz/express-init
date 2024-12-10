var express = require('express')
var router = express.Router()
const { osInfo,cpus ,cpusById} = require('../service/osService')


router.get('/',osInfo)
router.get('/cpus',cpus)
router.get('/cpus/:id',cpusById)


module.exports = router