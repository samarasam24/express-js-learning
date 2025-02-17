const express = require('express');
const text = require('./giveText.js');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.send(`${text()}`);
});

app.get('/home',(req,res) => {
    res.render('index');
});

app.listen(3000);