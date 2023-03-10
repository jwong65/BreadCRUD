const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_Seed')

//GET route for index baker
baker.get('/', (req, res)=>{
    Baker.find()
    .populate('breads')
        .then(foundBaker=>{
            res.send(foundBaker)
        })
})
//GET insertMany
baker.get('/data/seed', (req, res)=>{
    Baker.insertMany(bakerSeedData)
    .then(res.redirect('/breads'))
})

baker.get('/:id', (req, res)=>{
    Baker.findById(req.params.id)
    .populate({
        path: 'breads',
        //This limits the number of bread shown in the baker show field
        options: {limit: 3}
    })
    .then(foundBaker=>{
        res.render('bakerShow',{
            baker: foundBaker
        })
    })
})

baker.delete('/:id', (req, res)=>{
    Baker.findByIdAndDelete(req.params.id)
    .then(deleteBaker=>{
        res.status(303).redirect('/breads')
    })
})



module.exports = baker
