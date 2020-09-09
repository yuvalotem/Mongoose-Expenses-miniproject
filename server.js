const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', api)

mongoose.connect("mongodb://localhost/expenses")



const port = 4200
app.listen(port, function(req, res){
    console.log('server running on port ' + port);
})