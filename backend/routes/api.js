//
//
//  IMPORTS
//

const express = require('express');
const apiRouter = express.Router();

//
//
//  ROUTES FOR THE API
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

module.exports=apiRouter;