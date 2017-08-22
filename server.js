const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();


//nodemon server.js -e js,hbs
hbs.registerPartials(__dirname+'/views/partials');
//for setting the app with some metadata
app.set('view engine', 'hbs');

//Middleware
//to guide it do this way not the actual way
app.use(express.static(__dirname+'/Web'));



app.get('/',(req,res) => {
  res.render('10.hbs',{
    footer:'Copyright @2017',
    name:'Cyanamous'
  });
});

app.get('/1',(req,res) => {
  res.render('1.hbs',{
    footer:'Copyright @2017',
    name:'Cyanamous'
  });
});

app.get('/data',(req,res)=>{
  res.send("Hello Express!");
  console.log("ADI");
});

app.get('/obj',(req,res)=>{
  res.send({
    'name':'adi',
    'age':'19'
  });
});

app.listen(port,() => {
  console.log(`Server is up on ${port}`);
});

//to move to project forder in Git Bash
//cd a:
//cd Academics/Programming/Web\ Dev/Node/4\ Node-Web-Server/
