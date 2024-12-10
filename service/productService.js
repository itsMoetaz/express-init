var products = require ('../products.json')

function afficheProducts(req, res, next) {
    res.json(products);
}

function afficheProductsById(req, res, next) {
    const id = req.params.id
    res.json(products[id]);
}

function afficheQuantiteById(req,res,next){
    const id = req.params.id
    const qt = req.params.qt
    const product = products[id];
    const totalPrice = product.price * qt;
    res.json({
        id,
        qt,
        price: product.price,
        totalPrice});
}

function afficheProductByStock(req,res,next){
    const qt = req.params.qt
    const productsInStock = []
    for (const product of products) {
        if (product.stock >= qt) {
            productsInStock.push(product)
        }
    }
    res.json(productsInStock);
}



module.exports = { afficheProducts, afficheProductsById, afficheQuantiteById, afficheProductByStock}