const express = require('express');
const path = require('path')
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');

const history = require('./Routes/history');

mongoose.connect('mongodb://localhost:27017/finance', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', history)

app.listen(3000, () => {
    console.log('Serving on 3000')
});