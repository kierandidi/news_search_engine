//
//
//  IMPORT MODULES
//

const mongoose = require('mongoose');

//
//
//  Mongoose Models
//

const Schema = mongoose.Schema;

//creates Mongoose schema for articles
const articleSchema = new Schema({
    headline: String,
    topic: String,  //dropdown?
    publisher: String, //dropdonw?
    country: String, //dropdown menu?
    release_date: Date, //change to date later on? // Yes - Vincent
    weblink: String  
});

//creates model based on schema (an 'article' class)
//also creates a collection within database called 'articles'
const Article = mongoose.model('Article', articleSchema);

//
//
//  FINAL
//

//export module to be imported in
//  backend/routes/api.js
module.exports = Article;