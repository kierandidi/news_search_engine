const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: String,
    topic: String,  //dropdown?
    publisher: String, //dropdonw?
    country: String, //dropdown menu?
    release_date: String, //change to date later on?
    weblink: String  
});

module.exports = mongoose.model('Article', ArticleSchema);