const express = require('express')
const breads = express.Router()

//Connect to the model directory
const Bread = require('../models/bread.js')


breads.get('/', (req, res)=>{
    //res.send('This is the index at /breads')
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
    })
    //res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]){
        res.render('Show',{
            bread: Bread[req.params.arrayIndex]
           })
    } else{
        res.render('404')
    }
    // let breadimg = Bread[req.params.arrayIndex].image
   // res.send(`<img src=${breadimg}></img>`)
   
})
  
module.exports = breads

