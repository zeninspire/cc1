var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000

// var path = require('path')
// app.use(express.static(path.join(__dirname,'../client')));

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var handler = require('./handler');

app.get('/', function(req,res){
  res.send('hi there!')
});

app.post('/phase1', handler.phase1);

app.listen(PORT, () => console.log('Listening on port', PORT))

var db = require('./database/database_setup.js');

var handler = require('./handler.js')


