//
//
//  IMPORT MODULES
//

const express = require('express');

//setting up router object
const apiRouter = express.Router();

//
//
//  API ROUTES
//

apiRouter.get("/", (req,res,next)=>{

    res.send("Hello from Routes folder!");

})

// 'topics' requests

apiRouter.get("/topics",(req, res, next)=>{
    var object={
        message:"topics"
    };
    res.json(object);

})

apiRouter.get("/topics/:topicID",(req, res, next)=>{
    var object={
        message: req.params.topicID
    };
    res.json(object);

})

// 'topics/articles' requests

apiRouter.get("/topics/:topicID/articles",(req, res, next)=>{
    var object={
        message: `articles of ${req.params.topicID}`
    };
    res.json(object);

})

apiRouter.get("/topics/:topicID/articles/:articleID",(req, res, next)=>{
    var object={
        message: ` ${req.params.articleID} of ${req.params.topicID}`
    };
    res.json(object);

})

//
//
//  FINAL
//

//export module to be imported in backend/app.js
module.exports=apiRouter;