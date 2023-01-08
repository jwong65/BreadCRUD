const mongoose = require('mongoose')
const Baker = require('./baker')
const { Schema } = mongoose
//Shorthand for the constructor.


const breadSchema =  new Schema({
  name: { type: String, required:true},
  hasGluten: Boolean,
  //{type:Boolean} instead because there's no default or required
  image: {type:String, default:'http://placekitten.com/g/200/300'},
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})
//Instance
breadSchema.methods.bakedBy= function(){
  //Instead of bread, use this.name
  return `${this.name} was baked by ${this.baker}`
}

// Will work on later possibly
// breadSchema.statics.findByName = function(name){
//   return this.find({name})
// }

//Model
const Bread = mongoose.model('Bread', breadSchema)

module.exports=Bread
//Export what was the information prior but now with const Bread

// module.exports = [
//     {
//       name: 'Rye',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'French',
//       hasGluten: true,
//        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//       name: 'Gluten-Free',
//       hasGluten: false,
//       image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'Pumpernickel',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     }
//   ]
