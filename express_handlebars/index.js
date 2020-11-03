const express = require('express');
const exphbs  = require('express-handlebars');
 
const app = express();
const port = 3001
 
app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: __dirname + "views/"
}));

app.use (express.static('public'))

app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home', {
        title : 'bonjour'
    });
});
 
app.listen(3001, () => {
    console.log ('SERVEUR LISTENING')
})