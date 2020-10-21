const express = require('express');
const path = require('path')
const handlebars  = require('express-handlebars');
const app = express();
const morgan = require('morgan');

const port = 3000;

//Use static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources/view'));
console.log("PATH",path.join(__dirname, 'resources/view'));

// route
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/new', (req, res) => {
  res.render('new')
})
 
//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})