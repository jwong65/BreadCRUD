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

//POST DELETE
bakerSchema.post('findOneAndDelete', function(){
    //Console.log to test that this is being passed
    //console.log(this)
    Bread.deleteMany({baker: this._conditions._id})
        .then(deleteStatus=>{
            console.log(deleteStatus)
            //Example log of a status: { acknowledged: true, deletedCount: 1 }

        })
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker