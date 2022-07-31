const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const Article = require('./models/article');

mongoose.connect('mongodb://localhost:27017/article-database');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/makearticle', async (req, res) => {
    const article = new Article({headline: "Temperatures rising", topic: 'Climate Change'})
    await article.save();
    res.send(article)
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})
