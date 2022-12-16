const express = require('express')
const breads = express.Router()

//Connect to the model directory
const Bread = require('../models/bread.js')


breads.get('/', (req, res)=>{
    //res.send('This is the index at /breads')
    res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  
module.exports = breads

