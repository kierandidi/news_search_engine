//
//
//  IMPORT MODULES
//

const mongoose = require('mongoose');

//
//
//  SCHEMA
//

const Schema = mongoose.Schema;

//creates Mongoose schema for topics
const topicSchema = new Schema({
    name: String,
    description: String,
    numOfArticles: Number, 
    articles: [mongoose.Schema.Types.ObjectId]
});

//
//
//  Methods
//

//  Instance Methods


//
//
//  FINAL
//

//creates model based on schema (a 'topic' class)
//also creates a collection within database called 'topics'
const Topic = mongoose.model('Topic', topicSchema);

//export module to be imported in
//  backend/routes/api.js
module.exports = Topic;