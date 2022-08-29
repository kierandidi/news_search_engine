const mongoose = require('mongoose');
const Article = require('../models/article');
const Topic = require('../models/topic');
const seed_articles = require('./seed_articles')
const seed_topics = require('./seed_topics')

mongoose.connect('mongodb://localhost:27017/article-database');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {
    await Topic.deleteMany({});
    for (let i = 0; i < seed_topics.length; i++) {
        const t = new Topic({
            name: `${seed_topics[i].name}`,
            description: `${seed_topics[i].description}`,
            numOfArticles:`${seed_topics[i].numOfArticles}`, 
            //articles: `${seed_topics[i].articles}`, gives Cast Error. seeding will only be temporary anyway
        })
    //logs number of topics added
    console.log(i+1)
    await t.save();
    }
    await Article.deleteMany({});
    for (let i = 0; i < seed_articles.length; i++) {
        const a = new Article({
            headline: `${seed_articles[i].headline}`,
            topic: `${seed_articles[i].topic}`,
            //topics: `${seed_articles[i].topics}`, //gives cast Error, seeding will only be temporary anyway
            publisher: `${seed_articles[i].publisher}`,
            country: `${seed_articles[i].country}`,
            date: `${seed_articles[i].date}`,
            img: `${seed_articles[i].img}`,
            url: `${seed_articles[i].url}`

        })
    //logs number of articles added
    console.log(i+1)
    //insert logic to automatically put into topic array
    await a.save();
    }
    
}

//seedDB is asynch func => returns promise, use .then to close database connection
seedDB().then(() => {
    mongoose.connection.close();
})