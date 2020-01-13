const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//expres hbs 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'John chaux'
    });
    // //res.send('Hello World')
    // let salida = {
    //     nombre: 'Fernando',
    //     edad: 33,
    //     url: req.url
    // }
    // res.send(salida);
});
app.get('/about', function(req, res) {
    res.render('about');

});

app.listen(3000, () => {
    console.log('Escuchando peticiones puerto 3000');
});