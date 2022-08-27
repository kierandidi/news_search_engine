const express = require('express');
const apiRouter = express.Router();

//routes for API

apiRouter.get("/", (req,res,next)=>{

    res.send("Hello from Routes folder!");

})


apiRouter.get("/json",(req, res, next)=>{
    var object={
        message:"This is a json!"
    };
    res.json(object);

})

apiRouter.get('/home',(req,res,next) =>{
    res.render('home', null);
})



module.exports=apiRouter;