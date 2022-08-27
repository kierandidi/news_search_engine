// vvv
// IMPORTS
// vvv

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Article = require('./models/article');

// vvv
// DATABASE
// vvv

mongoose.connect('mongodb://localhost:27017/article-database');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});


// vvv
// EXPRESS SETTINGS
// vvv

const app = express();

//setting HTML templating engine to EJS
app.set('view engine', 'ejs');
//setting path to 'views' (directory)
app.set('views', path.join(__dirname, 'views'));

//tell express to parse bodies as URL encoded of post requests for adding new articles
app.use(express.urlencoded({extended: true}));
//tell express to parse request bodies with JSON payloads
app.use(express.json());
app.use(methodOverride('_method'));

// vvv
// ROUTES
// vvv

//sets up route for CRUD
    //CRUD will most likely be implemented *through* API
    //just wanted it out of app.js for now so it's easier to read
const CRUDRouter = require(path.resolve(__dirname, "./routes/crud.js"));
//uses CRUD routing when '/article/' is getting used
app.use("/articles/", CRUDRouter);

//sets up route for API
const apiRouter = require(path.resolve(__dirname, "./routes/api.js"));
//uses API routing when '/api/' is getting used
app.use("/api/", apiRouter);

//defaults to homepage when no other request is used (make sure this is the last request!)
app.get('*', (req, res) => {
    res.render('home');
});

// vvv
// FINAL
// vvv

app.listen(3000, () => {
    console.log('Serving on port 3000')
});
