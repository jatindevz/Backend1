
const Product = require('../modal/product.modal.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (e) {
        res.status(500).json({massege : e.massege})

    } 
}


module.exports = {getProducts}