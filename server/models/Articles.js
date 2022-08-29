const mongoose = require("mongoose");

// Here we define the stucture and content of every object 
// moved into the Articles collection of the database
const ArticleSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const ArticleModel = mongoose.model("articles", ArticleSchema);
module.exports = ArticleModel;

