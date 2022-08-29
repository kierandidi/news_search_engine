const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ArticleModel = require("./models/Articles");

const cors = require("cors");
const databaseURI = require("./var");

app.use(express.json());
app.use(cors()); // allows you to make requests from the frontend deployed at a different domain


mongoose.connect(databaseURI);

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

// feed articles about global warming from DB to frontend
app.get("/global-warming", (req, res) => {
    ArticleModel.find({topic: "Global Warming"}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// feed articles about bitcoin from DB to frontend
app.get("/bitcoin", (req, res) => {
    ArticleModel.find({topic: "Bitcoin"}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// feed articles about abortion from DB to frontend
app.get("/abortion", (req, res) => {
    ArticleModel.find({topic: "Supreme Court and abortion"}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// feed articles about inflation from DB to frontend
app.get("/inflation", (req, res) => {
    ArticleModel.find({topic: "US inflation 2022"}, (err, result) => {
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