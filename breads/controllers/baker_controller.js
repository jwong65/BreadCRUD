const express = require('express')
const Baker = require('../models/baker')
const baker = express.Router()

const bakerModel = require('../models/baker')
const bakerSeedData = require('../models/baker_Seed')

//GET route for index baker
baker.get('/', (req,res)=>{
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
module.exports = baker
