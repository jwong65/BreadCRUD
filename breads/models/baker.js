const mongoose = require('mongoose')
const { Schema } = mongoose


const bakerSchema = new Schema({

})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker