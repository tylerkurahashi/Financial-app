const express = require('express');
const path = require('path')
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/finance-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req, res) => {
    res.render('home')
});

app.listen(3000, () => {
    console.log('Serving on 3000')
});