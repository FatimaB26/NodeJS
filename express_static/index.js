const express = require('express');
const port = 3000;

const app = express();

app.use(express.static('public'));


app.listen(3000, () => {
    console.log ('SERVEUR LISTENING')
})