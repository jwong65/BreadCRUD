const express = require('express')
const breads = express.Router()

//Connect to the model directory
const Bread = require('../models/bread.js')


breads.get('/', (req, res)=>{
    //res.send('This is the index at /breads')
    Bread.find()
      .then(foundBreads=>{
        res.render('index', {
          breads: foundBreads,
          title: 'Index Page'
        })
        //console.log(foundBreads)
      })
    
    // res.render('Index', {
    //     breads: Bread,
    //     title: 'Index Page'
    // })
    // //res.send(Bread)
})

//Will render from new.jsx viewgi
breads.get('/new', (req, res)=>{
    res.render('new')
})
  
// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deleteBread=>{
      res.status(303).redirect('/breads')
    })
    
    // .catch(err=>{
    //   res.render('404')
    // })

  // Bread.splice(req.params.indexArray, 1)
    // res.status(303).redirect('/breads')
  })

  // EDIT to edit.jsx
breads.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
      bread: Bread[req.params.indexArray],
      index: req.params.indexArray
    })
})

  

// SHOW
// show array from
breads.get('/:id', (req, res)=>{
  Bread.findById(req.params.id)
    .then(foundBreads=>{
      res.render('show',{
        bread: foundBreads
      })
    })
    .catch(err=>{
      res.render('404')
    })
})
  
  // '/:arrayIndex', (req, res) => {

  // if (Bread[req.params.arrayIndex]) {
    //   res.render('Show', {
    //     bread:Bread[req.params.arrayIndex],
    //     index: req.params.arrayIndex,
    //   })
    // } else {
    //   res.render('404')
    // }


// UPDATE
breads.put('/:arrayIndex', (req, res) => {
    console.log("get")
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})
    // let breadimg = Bread[req.params.arrayIndex].image
   // res.send(`<img src=${breadimg}></img>`) 
breads.post('/', (req, res) => {
    //This is the default image to be added.
    if (!req.body.image) {
        req.body.image = undefined
        // 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = 'true'
    } else {
      req.body.hasGluten = 'false'
    }
    //Instead of Bread.push(req.body) we use Bread.create
    Bread.create(req.body)
    //res.send(Bread)
    //Will now send to /breads
    res.redirect('/breads')
})
  
  
module.exports = breads
