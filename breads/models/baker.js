const mongoose = require('mongoose')
const baker = require('../controllers/baker_controller')
const { Schema } = mongoose


const bakerSchema = new Schema({
    name:{
        type: String,
        required: true, 
        enum:['Rachel', 'Monica', 'Joey', 'Ross', 'Phoebe', 'Chandler']
    },
    startDate:{ 
        type: String,
        required: true
    },
    bio:{ type: String}

},
{ toJSON:{virtuals: true}})

//Virtual
bakerSchema.virtual('bread',{
    //Related model's schema is Bread from bread.js
    ref: 'Bread',
    localField: '_id',
    //foreginField is the reference on the bread
    foreignField: 'baker'
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker