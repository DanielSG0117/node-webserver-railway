require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public')) //Se coloca el directorio de la carpeta, ademas de que tiene prioridad

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Daniel Suarez',
        titulo: 'Curso node'
    });
});


app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Daniel Suarez',
        titulo: 'Curso node'
    });
});


app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Daniel Suarez',
        titulo: 'Curso node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');//Esto sirve para los paths absolutos
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })