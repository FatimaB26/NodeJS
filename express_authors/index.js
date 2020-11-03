const express = require('express');

const app = express();

let authors = ['Lawrence Nowell, UK','William Shakespeare, UK','Charles Dickens, US','Oscar Wilde, UK'];
let books = ['Beowulf','Hamlet, Othello, Romeo and Juliet, MacBeth','Oliver Twist, A Christmas Carol','The Picture of Dorian Gray, The Importance of Being Earnest']
let authors_books = [
    {
        id : 1,
        name : "Lawrence Nowell",
        nationality : "UK",
        books : ["Beowulf"],
    },
    {
        id : 1,
        name : "William Shakespeare",
        nationality : "UK",
        books : ["Hamlet, Othello, Romeo and Juliet, MacBeth"],
    },
    {
        id : 1,
        name : "Charles Dickens",
        nationality : "US",
        books : ["Oliver Twist, A Christmas Carol"],
    },
    {
        id : 1,
        name : "Oscar Wilde",
        nationality : "UK",
        books : ["The Picture of Dorian Gray, The Importance of Being Earnest"],
    }
]

app.get('/', (req, res, next) => {
    console.log('Authors API')
    res.send('Authors API')
})

// les auteurs

app.get('/authors/1/', (req, res) => {
    res.send(authors[0]);
});
app.get('/authors/2/', (req, res) => {
    res.send(authors[1]);
});
app.get('/authors/3/', (req, res) => {
    res.send(authors[2]);
});
app.get('/authors/4/', (req, res) => {
    res.send(authors[3]);
});

// les livres

app.get('/authors/1/books/', (req, res) => {
    res.send(books[0]);
});
app.get('/authors/2/books/', (req, res) => {
    res.send(books[1]);
});
app.get('/authors/3/books/', (req, res) => {
    res.send(books[2]);
});
app.get('/authors/4/books/', (req, res) => {
    res.send(books[3]);
});

//error

app.get('/cars/', (req, res) => {
    res.send('error');
});

app.get('/authors/12133/', (req, res) => {
    res.send('The author with the ID 12133 does not exist');
});


app.listen(3000, () => {
    console.log ('SERVEUR LISTENING')
})

//strucure complexe auteurs + livres

app.get('/json/authors/:id/', (req, res) => {
    const id = req.params.id;

    if (id > authors_books.length) {
        res.send(`The author with the ID ${id} does not exist`);
    } else {
        const { name, nationality } = authors_books[id - 1]

        res.json({
            name,
            nationality
        });
    }
});

app.get('/json/authors/:id/books', (req, res) => {
    const id = req.params.id;

    if (id > authors.length) {
        res.send(`The author with the ID ${id} does not exist`);
    } else {
        const { books } = authors_books[id - 1]

        res.json({ books });
    }
});