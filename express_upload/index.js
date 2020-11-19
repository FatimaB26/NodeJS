// import express

const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const port = 3001

// import base de données + schema

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/upload',
{useUnifiedTopology: true, useNewUrlParser : true});

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        index: true
      },
    firstName : String,
    surname : String,
    profilePicture : String,
    created : {type : Date, 
            default : Date.now}
})

const UserModel = mongoose.model('User', userSchema);

// express

app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: __dirname + "views/"
}));

app.use (express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.send('Welcome to express upload');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.post('/upload', (req, res) => {
    console.log(req.body);
    res.render('home', {
        title: 'Formulaire',
        username: req.body.username
    });
});
  
app.listen(3001, () => {
    console.log ('SERVEUR LISTENING')
})
