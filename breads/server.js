const express = require('express')
const app = express()


//Requried configuration for the environment variable
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
//console.log(process.env.PORT) They are the same.

//Middleware
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes for the pages
app.get('/', (req, res)=>{
    res.send("First page about bread")
})
// Breads
const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)
  
app.listen(PORT)