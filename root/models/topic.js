const mongoose = require('mongoose')

const Schema = mongoose.Schema

const topicSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    description: {
      type: String,
      required: [false, ''],
    },
    numOfArticles: {
      type: Number,
      required: [false, ''],
    },
    articles: [
      {
        type: mongoose.ObjectId,
        required: [false, ''],
        ref: 'Article',
      },
    ],
  },
  {
    autoIndex: true,
    autoCreate: true,
  }
)

const Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic
