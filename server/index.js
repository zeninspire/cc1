var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000

// var path = require('path')
// app.use(express.static(path.join(__dirname,'../client')));

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req,res){
  res.send('hi there!')
});

app.listen(PORT, () => console.log('Listening on port', PORT))

var db = require('./database/database_setup.js');


