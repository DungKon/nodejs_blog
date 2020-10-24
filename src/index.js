const express = require('express');
const path = require('path')
const handlebars  = require('express-handlebars');
const app = express();
const morgan = require('morgan');
const route = require('./routes')

const port = 3000;

//Use static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources/view'));
console.log("PATH",path.join(__dirname, 'resources/view'));

// route init
route(app)
 
//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})