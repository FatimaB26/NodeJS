const students = ['Jean', 'Binta', 'Agathe', 'Adil'];

const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const port = 3003;

app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: __dirname + "views/"
}));

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.json({students});
});
 
app.get('/views/home.handlebars', function (req, res) {
    res.render('home');
});

app.listen(3003, () => {
    console.log ('SERVEUR LISTENING')
})