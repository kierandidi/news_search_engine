const mongoose = require('mongoose')
const Topic = require('./topic')

const Schema = mongoose.Schema

const articleSchema = new Schema(
  {
    headline: {
      type: String,
      required: [true, 'headline is required'],
      index: 'text',
    },
    cardTitle: {
      type: String,
      required: [true, 'cardTitle is required'],
    },
    topics: [
      {
        type: mongoose.ObjectId,
        required: [false, ''],
        index: true,
        ref: 'Topic',
      },
    ],
    publisher: {
      type: String,
      required: [true, 'publisher is required'],
    },
    country: {
      type: String,
      required: [false, ''],
    },
    date: {
      type: Date,
      requried: [true, 'date is required'],
      max: [Date.now, 'article cannot be released in the future'],
    },
    img: {
      type: String,
      required: [false, ''],
    },
    url: {
      type: String,
      required: [true, 'url is required'],
    },
  },
  {
    autoIndex: true,
    autoCreate: true,
  }
)

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
