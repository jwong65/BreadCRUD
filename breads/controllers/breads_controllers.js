const express = require('express')
const Baker = require('../models/baker.js')
const breads = express.Router()

//Connect to the model directory
const Bread = require('../models/bread.js')


breads.get('/', async (req, res)=>{
    //res.send('This is the index at /breads')

    //When this is async Baker.find() and Bread.find have to be changed
    // Baker.find()
    //  .then(foundBaker=>{
        // Bread.find()
        // .then(foundBreads=>{

    const foundBread = await Bread.find().limit(5)
    const foundBaker = await Baker.find()
          res.render('index', {
            breads: foundBread,
            bakers: foundBaker,
            title: 'Index Page'
          })
          //console.log(foundBreads)
        }
      
      
    // res.render('Index', {
    //     breads: Bread,
    //     title: 'Index Page'
    // })
    // //res.send(Bread)
)

//Will render from new.jsx viewgi
breads.get('/new', (req, res)=>{
    Baker.find()
    .then(bakerFound=>{
      res.render('new',{
        bakers: bakerFound
      })
    })
    //res.render('new')
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
  
// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
  Bread.findByIdAndUpdate(req.params.id, req.body, {new:true})
  //3rd paramter is option to make sure it is updated
    .then(updateBread=>{
      //console.log(updateBread)
      //This is not using arrayIndex anymore but the id of the database
      res.redirect(`/breads/${req.params.id}`)
    })
  // if(req.body.hasGluten === 'on'){
  //   req.body.hasGluten = true
  // } else {
  //   req.body.hasGluten = false
  // }
  // Bread[req.params.arrayIndex] = req.body
  // res.redirect(`/breads/${req.params.arrayIndex}`)
})

  // EDIT to edit.jsx
breads.get('/:id/edit', (req, res) => {
    Baker.find()
      .then(foundBaker=>{
        Bread.findById(req.params.id)
        .then(foundBreads=>{
          res.render('edit', {
            //Instead of req.params.indexArray use the data that was sent from database
            bread: foundBreads,
          // index: req.params.indexArray, This isn't needed anymore
            bakers: foundBaker
              }) 
        })
    
    })
    
    
  // res.render('edit', {
  //     bread: Bread[req.params.indexArray],
  //     index: req.params.indexArray
  //   })
})

  

// SHOW
// show array from
breads.get('/:id', (req, res)=>{
  Bread.findById(req.params.id)
    .populate('baker')
    .then(foundBreads=>{
      // Have to use the promise foundBreads for bakedBy
      const wasBaked = foundBreads.bakedBy()
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
  
breads.get('/data/seed', (req, res) => {
  Bread.insertMany([
    {
      name: 'Rye',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'French',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Gluten Free',
      hasGluten: false,
      image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    },
    {
      name: 'Pumpernickel',
      hasGluten: true,
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    }
  ]
  )
    .then(createdBreads => {
      res.redirect('/breads')
    })
})

breads.get('*',(req, res)=>{
  res.render('404')
})
module.exports = breads
