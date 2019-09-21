const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const mongodb = require('./models/config')
const Router = require('./Routes/recipes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//CORS
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,  DELETE, PATCH, OPTIONS');
    next();
    })

app.use('/api/recipes', Router)

module.exports = app;
