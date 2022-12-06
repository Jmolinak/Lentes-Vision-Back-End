require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const { SERVER_PORT, SERVER_HOST, MONGODB_URI } = process.env;//desestructuracion del archivo .env
require('./app/routes')(app);

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(SERVER_PORT, () => {
        console.log('Conection exitosa and inicio en el puerto ' + SERVER_HOST + ':' + SERVER_PORT);
    });
}).catch((err) => {
    console.log('Conection Failed: ' + err);
});

