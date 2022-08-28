//
//
//  IMPORT MODULES
//

const express = require('express');

//importing 'Article' model for Mongoose    //  is used for API calls to database
const Article = require('../models/article');
//importing 'Topic' model for Mongoose    //  is used for API calls to database
const Topic = require('../models/topic');

//setting up router object
const apiRouter = express.Router();

//
//
//  API ROUTES
//

//  Parameters

//catching parameter ':topicID'
apiRouter.param('topicID', (req, res, next) => {
    console.log(req.params.topicID);
    next();
})

//catching parameter ':articleID'
apiRouter.param('articleID', (req, res, next) => {
    console.log(req.params.articleID);
    next();
})

//  Routes

//  'topics' requests

apiRouter.route("/topics")
    
        //returns all topics as JSON
    .get((req, res, next)=>{
        
        //finds all topics 
        Topic.find({})
        //returns found topics as JSON
        .then(data=> res.json(data));
})

apiRouter.route("/topics/:topicID")

        //returns topic matching ':topicID' as JSON
    .get((req, res, next)=>{
        
        //saving parameter as constant for ease of use
         const { topicID } = req.params;

        //finds topics matching 'topicID' with value under 'name' key 
        Topic.find({name:topicID})
        //returns found topics as JSON
        .then(data=> res.json(data));
})

//  'topics/articles' requests

apiRouter.route("/topics/:topicID/articles")

        //returns all articles under topic matching ':topicID' as JSON
    .get((req, res, next)=>{
        
        //saving parameter as constant for ease of use
        const { topicID } = req.params;

        //finds articles matching 'topicID' with value under 'topic' key 
        Article.find({topic:topicID})
        //returns found articles as JSON
        .then(data=> res.json(data));
})

apiRouter.route("/topics/:topicID/articles/:articleID")
        
        //returns article matching ':articleID' as JSON
    .get((req, res, next)=>{
        
        //saving parameter as constant for ease of use
        const { articleID } = req.params;

        //finds articles matching 'articleID' with value under 'headline' key 
        Article.find({headline:articleID})
        //returns found articles as JSON
        .then(data=> res.json(data));
})

//
//
//  FINAL
//

//export module to be imported in backend/app.js
module.exports=apiRouter;