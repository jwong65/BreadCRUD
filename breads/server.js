const express = require('express')
const app = express()

const methodOverride = require('method-override')
// using the dependency of method-override
app.use(methodOverride('_method'))

const mongoose = require('mongoose')
//Dependency for mongoose
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  


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

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


//Routes for the pages
app.get('/', (req, res)=>{
    res.send("First page about bread")
})
// Breads
const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)


//Catch all page 404
app.get('*', (req, res)=>{
    res.render('404')
})
  
app.listen(PORT)