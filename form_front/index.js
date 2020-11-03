const express = require('express');
const exphbs  = require('express-handlebars');
 
const app = express();
const port = 3002
  
app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: __dirname + "views/"
}));

app.use (express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.post('/form/signup', (req, res) => {
    console.log('form parameter', req.body.username); 
  });
 
app.listen(3002, () => {
    console.log ('SERVEUR LISTENING')
})