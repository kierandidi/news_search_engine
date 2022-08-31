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
    //Old Seeding method by Kieran
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
    
const newSeedDB = async () => {
    
    //  INIT

    //clear the database
    await Topic.deleteMany({});
    await Article.deleteMany({});
    console.log("Database cleared")

    //create object that caches information for seeding
    const seedsCache = {

    }

    //  TOPICS

    //for every topic in seed_topics
    for (topic of seed_topics){
        //create new topic based on input
        const newTopic = new Topic(topic);
        //save new topic to database
        await newTopic.save()
        .then((data)=>{
            //and save the id of the topic in the seedsCache using topicname as a key
            seedsCache[data.name]=data.id
        })
    }
    //console.log(seedsCache);
    console.log(await Topic.find({}));

    //  ARTICLES

    //for every article in seed_articles
    for (article of seed_articles){

        //  get topicIDs into topics array

        //go through array of topics
        for (let i = 0; i < article.topics.length;i++){
            //save topicName of current element
            const topicName = article.topics[i];
            //find topic matching the topicName in db
            foundTopic = await Topic.findOne({name:topicName});
            //replace topicName in the array by the id of the foundTopic
            article.topics[i] = foundTopic.id;
        }
        console.log(article.topics);

        //  save new article

        //create new article based on input
        const newArticle = new Article(article);
        //save new article to database *and* as constant
        const savedArticle = await newArticle.save();
        
        //  update topics

        //for each topic it's part of
        for (topicId of article.topics){
            //find that topic
            const foundTopic = await Topic.findById(topicId)
            //push articleId onto topic's articlId array
            foundTopic.articles.push(savedArticle.id);
            //update number of articles on topic
            foundTopic.numOfArticles++;
            //save the changes
            await foundTopic.save();
            console.log(foundTopic);
        }

    }


}


//seedDB is asynch func => returns promise, use .then to close database connection
newSeedDB().then(() => {
    mongoose.connection.close();
})