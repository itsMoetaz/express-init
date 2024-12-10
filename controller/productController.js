var express = require('express')
var router = express.Router()
const { afficheProducts,afficheProductsById,afficheQuantiteById,afficheProductByStock} = require('../service/productService')

router.get('/products',afficheProducts)
router.get('/products/:id',afficheProductsById)
router.get('/products/:id/:qt',afficheQuantiteById)
router.get('/stock/:qt',afficheProductByStock)






module.exports = router