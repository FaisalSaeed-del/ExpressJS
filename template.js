var express = require('express');
var app = express();
const path = require('path')
const staticpath= path.join(__dirname, "./src");

// app.use(express.static(staticpath));
// console.log(path.join(__dirname, "./src"))

// set view engine

app.set('view engine','hbs');


app.listen(8000,()=>{
        console.log("app is running")
    })




app.get('/', function(req, res) {
      res.send("Hello to the view engine")
    });

    app.get('', function(req, res) {
        res.render("index")
      });