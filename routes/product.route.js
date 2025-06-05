const express = require('express');
const router = express.Router();
const Product = require('../modal/product.modal.js');
const {getProducts}= require('../controller/product.controller.js');

router.get('/', getProducts);

// router.get("/:id", getProduct);

module.exports = router