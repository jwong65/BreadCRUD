const express = require('express')
const baker = express.Router()

const bakerModel = require('../models/baker')
const bakerSeedData = require('../models/baker_Seed')

module.exports = baker
