
const path = require("path")
var express = require('express')
var app = express()

// Builtin-midleware

// console.log(path.join(__dirname, "../src"));
const staticPath= path.join(__dirname,"../src");

// app.use(express.static(staticPath));
app.set('view engine','hbs');
app.get('', function(req, res) {
            res.render("index")
          });

app.get('/', function(req, res) {
  res.send('Faisal Saeed')
})
app.get("/About", function(req, res) {
  res.send('Hi i am Faisal Saeed')
})
app.get("/contact", function(req, res) {
  res.send('contact with Faisal Saeed')
})

app.listen(8000,()=>{
    console.log("app is running")
})

// // Routing in Expressjs 
