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
const articleSchema = new Schema(
    
        //  SchemaTyping

    {
        headline: {
            type: String,
            required: [true, 'headline is required'],
            index: 'text'
        },
        cardTitle: {
            type: String,
            required: [true, 'cardTitle is required'],         
        },
        topics: [{
            type: mongoose.ObjectId,
            required: [false, ''],
            index: true,
            //populate: {path:'topics', select: 'name'},    this straight up doesn't work. Mongoose documentation is a mess
            ref: 'Topic'
        }],
        publisher: {
            type: String,
            required: [true, 'publisher is required']
        },
        country: {
            type: String,
            required: [false, '']
        },
        date: {
            type: Date,
            requried: [true, 'date is required'],
            max: [Date.now, 'article cannot be released in the future']
        },
        img: {
            type: String,
            required: [false, '']
        },
        url: {
            type: String,
            required: [true, 'url is required']
        }
    },
    
        //  Options
    
    {
        autoIndex: true,    //turn off for production
        autoCreate: true,    //turn off for production
    }
);

//
//
//  METHODS
//

//  Instance Methods



//
//
//  FINAL
//

//creates model based on articleSchema (an 'article' class)
//also creates a collection within database called 'articles'
const Article = mongoose.model('Article', articleSchema);

//export module to be imported in
//  backend/routes/api.js
module.exports = Article;