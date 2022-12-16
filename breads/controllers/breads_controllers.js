const express = require('express')
const breads = express.Router()

//Connect to the model directory
const Bread = require('../models/bread.js')


breads.get('/', (req, res)=>{
    //res.send('This is the index at /breads')
    res.render('index', {
        breads: Bread
    })
    //res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    //res.send(`<img src='Bread[req.params.arrayIndex].image'></img>`)
    let breadimg = Bread[req.params.arrayIndex].image
    //res.send(Bread[req.params.arrayIndex])
    res.send(`<img src=${breadimg}></img>`)
})
  
module.exports = breads

