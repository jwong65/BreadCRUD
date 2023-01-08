const mongoose = require('mongoose')
//connect to bread.js
const Bread = require('./bread')
const { Schema } = mongoose


const bakerSchema = new Schema({
    name:{
        type: String,
        required: true, 
        enum:['Rachel', 'Monica', 'Joey', 'Ross', 'Phoebe', 'Chandler']
    },
    startDate:{ 
        type: Date,
        required: true
    },
    bio:{ type: String}

},
{ toJSON:{virtuals: true}})

//Virtual
bakerSchema.virtual('breads',{
    //Related model's schema is Bread from bread.js
    ref: 'Bread',
    localField: '_id',
    //foreginField is the reference on the bread
    foreignField: 'baker'
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker