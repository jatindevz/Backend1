const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://thejatinpatilx:HTcHZ69Gpyuwc0xy@onepiece-1.jqdjt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=OnePiece-1')
    .then(() => {
        console.log('Connected!');
        app.listen(8000, () => {
            console.log("The server is running on http://localhost:8000/");
            console.log('hogya bhai jo hona tha');
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

app.get('/', (req, res) => {
    res.send('hogya nhai jo hona tha !!!');
});

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log('Received POST request for /api/cars');
    console.log('Name:', name);
    console.log('Brand:', brand);
    
    // Set status before sending the response
    res.status(200).send(`Car Name: ${name}, Brand: ${brand}`);
});
