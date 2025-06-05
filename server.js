const express = require('express'); // import express  
const mongoose = require('mongoose');
const Product = require('./model/product.modal.js');

const app = express(); // create express app


app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World!, I am a backend developer');
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
})



app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
})

mongoose.connect("mongodb+srv://zorororonoaa11:6TsCQFGB51EwwOVt@backendcluster.bh5k2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendCluster")
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server listening on port http://localhost:3000');
        });

    })
    .catch((err) => {
        console.log(err);
    });


