//  IMPORT MODULES
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const cors = require("cors");

//  DATABASE
// connects to database "article-database", creates new database if not already existing
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

//  EXPRESS SETTINGS
const app = express();

//  MIDDLEWARE
//tell express to parse bodies as URL encoded of post requests for adding new articles
app.use(express.urlencoded({extended: true}));
//tell express to parse request bodies with JSON payloads
app.use(express.json());
app.use(cors());
app.use(methodOverride('_method'));


//  ROUTES
//sets up router for API
const apiRouter = require(path.resolve(__dirname, "./routes/api.js"));
//uses API routing when '/api/' is getting used
app.use("/api/", apiRouter);
//defaults to homepage when no other request is used (make sure this is the last request!)

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('react-app/build'));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/react-app/build/index.html'));
    });
   }

//  FINAL
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server connected!')
});