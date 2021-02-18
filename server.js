require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

global.rootRequire = function(name) {
  return require(__dirname + '/' + name);
};


const app = express();
const port = process.env.PORT || 3010;



app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes')(app);

app.use(express.static('public'));


app.listen(port, () => console.log(`Dude, I'm listening on port ${port}`))
