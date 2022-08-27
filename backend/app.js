const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Article = require('./models/article');

mongoose.connect('mongodb://localhost:27017/article-database');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//tell express to parse bodies as URL encoded of post requests for adding new articles
app.use(express.urlencoded({extended: true}));
//tell express to parse request bodies with JSON payloads
app.use(express.json());
app.use(methodOverride('_method'));


//sets up route for CRUD
const CRUDRouter = require(path.resolve(__dirname, "./routes/crud.js"));
//uses CRUD routing when '/article/' is getting used
app.use("/articles/", CRUDRouter);


//sets up route for API
const apiRouter = require(path.resolve(__dirname, "./routes/api.js"));
//uses API routing when '/api/' is getting used
app.use("/api/", apiRouter);

//defaults to homepage when no other (get) request is used (make sure this is the last get request)
app.get('*', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Serving on port 3000')
});
