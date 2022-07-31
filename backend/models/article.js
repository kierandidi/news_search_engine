const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: String,
    topic: String,
    publisher: String,
    country: String,
    release_date: Date,
    weblink: String  
});

module.exports = mongoose.model('Article', ArticleSchema);