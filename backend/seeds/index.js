const mongoose = require('mongoose');
const Article = require('../models/article');
const seed_articles = require('./seed_articles')

mongoose.connect('mongodb://localhost:27017/article-database');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {
    await Article.deleteMany({});
    for (let i = 0; i < seed_articles.length; i++) {
        const a = new Article({
            headline: `${seed_articles[i].headline}`,
            topic: `${seed_articles[i].topic}`,
            publisher: `${seed_articles[i].publisher}`,
            country: `${seed_articles[i].country}`,
            release_date: `${seed_articles[i].release_date}`,
            weblink: `${seed_articles[i].weblink}`

        })
    //logs number of articles added
    console.log(i+1)
    await a.save();
    }
}

//seedDB is asynch func => returns promise, use .then to close database connection
seedDB().then(() => {
    mongoose.connection.close();
})