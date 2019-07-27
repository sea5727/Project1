const express = require("express");
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const api = require('./routes');
const app = express();

 
app.use(morgan({ format: 'dev', stream : fs.createWriteStream('app.log', {'flags' : 'w'})} ));
app.use(express.static("dist"));
app.use(bodyParser.json()); 

app.get("/api/getUsername", (req, res) => {
  console.log('getUSername')
  res.send("Hi! hello")
});

app.use('/api', api);
app.get("*", (req, res) => {
  console.log('get * !!! __dirname=', __dirname);
  console.log(path.resolve(__dirname, './../../public/index.html'));
  
  res.sendFile(path.resolve(__dirname, './../../public/index.html'));
})


const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { 
  console.log('Connected to mongodb server');
})

mongoose.connect('mongodb://ysh8361:ysh8361@192.168.0.15:27017/Project1');

app.use(session({
  secret : 'CodeLab1$1',
  resave: false,
  saveUninitialized : true,
}));




app.listen(8080, () => console.log("Listening on port 8080!"));