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
const topicSchema = new Schema(
    
    //  SchemaTyping
    
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        description: {
            type: String,
            required: [false, '']
        },
        numOfArticles: {
            type: Number,
            required: [false, '']
        }, 
        articles: [{
            type: mongoose.ObjectId,
            required: [false, ''],            
            //populate: {},
            ref: 'Article'
        }]
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

//creates model based on topicSchema (a 'topic' class)
//also creates a collection within database called 'topics'
const Topic = mongoose.model('Topic', topicSchema);

//export module to be imported in
//  backend/routes/api.js
module.exports = Topic;