const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ArticleModel = require("./models/Articles");

const cors = require("cors");

app.use(express.json());
app.use(cors()); // allows you to make requests to the server deployed at a different domain


mongoose.connect("link to database");

// feed articles from DB to frontend
app.get("/getArticles", (req, res) => {
    ArticleModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// in case we want to store articles made in the frontend
app.post("/createArticle", async (req, res) => {
    const article = req.body;
    const newArticle = new ArticleModel(article);
    await newArticle.save();

    res.json(article);
})

//connects to server
app.listen(3001, () => {
    console.log("server runs")
});