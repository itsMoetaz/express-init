var express = require('express')
var router = express.Router()
const { list, create, supp, modifier } = require('../service/userService')
var validate = require('../middleware/validation')


router.get('/list',list)
router.post('/create/:age',validate,create)
router.delete('/delete/:id',supp)
router.put('/update/:id',modifier)

module.exports = router