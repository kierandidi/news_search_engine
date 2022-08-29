//
//
//  IMPORT MODULES
//

const mongoose = require('mongoose');
//importing 'Topic' model for methods
const Topic = require('./topic');

//
//
//  SCHEMA
//

const Schema = mongoose.Schema;

//creates Mongoose schema for articles
const articleSchema = new Schema({
    headline: {
        type: String
    },
    topic: {
        type: String            //old entry for Frontend
    },
    topics: [{
        type: mongoose.ObjectId //array of topic ObjectIDs, not implemented yet
    }],
    publisher: {
        type: String
    }, //dropdonw?
    country: {
        type: String
    }, //dropdown menu?
    date: {
        type: Date
    },
    img: {
        type: String
    },
    url: {
        type: String
    }  
});

//
//
//  Methods
//

//  Instance Methods

/*SLEEP DEPRiVED CODING AHEAD
//adds topics to 'topic' array
//topicArray must be an array of topic names
articleSchema.methods.addTopicsByName = function(topicArray){

        //for every topic in topicArray
        for (topic of topicArray){
            //search for topics with matching name
            Topic.find({name:topic})
            //then return their data
            .then((data) => {
                //and for each topic found
                for (topic of data){
                    //push the ObjectId of found topic on topics array
                    this.topics.push(topic._id);
                    //then add itself into the topic's 'articles' array
                    topic.addArticle(this)
                }
            })
        }
        return this.save();
}

//adds topics to 'topic' array
//topicArray must be an array of topic IDs
articleSchema.methods.addTopicsById = function(topicArray){

    //for every topic in topicArray
    for (topic of topicArray){
        //push the ObjectId of topic on topics array
        //!!This needs to check for errors!!
        this.topics.push(topic._id);
    }
    return this.save();
}
*/

//
//
//  FINAL
//

//creates model based on schema (an 'article' class)
//also creates a collection within database called 'articles'
const Article = mongoose.model('Article', articleSchema);

//export module to be imported in
//  backend/routes/api.js
module.exports = Article;