const express = require('express')
const Article = require('../models/article')
const Topic = require('../models/topic')
const apiRouter = express.Router()

apiRouter.param('topicID', (req, res, next) => {
  console.log(req.params.topicID)
  next()
})

apiRouter.param('articleID', (req, res, next) => {
  console.log(req.params.articleID)
  next()
})

apiRouter
  .route('/topics')
  .get((req, res, next) => {
    Topic.find({}).then((data) => res.json(data))
  })
  .post((req, res, next) => {
    const newTopic = new Topic(req.body)
    newTopic.save().then((data) => res.json(data))
  })

apiRouter
  .route('/topics/:topicID')
  .get((req, res, next) => {
    const { topicID } = req.params
    Topic.findById(topicID)
      .populate('articles')
      .then((data) => res.json(data))
  })
  .patch((req, res, next) => {
    const { topicID } = req.params
    const options = {
      runValidators: true,
      returnDocument: 'after',
    }
    Topic.findByIdAndUpdate(topicID, req.body, options).then((data) =>
      res.json(data)
    )
  })
  .delete((req, res, next) => {
    const { topicID } = req.params
    Topic.findByIdAndDelete(topicID).then((data) => res.json(data))
  })

apiRouter
  .route('/topics/:topicID/articles')

  .get((req, res, next) => {
    const { topicID } = req.params
    Topic.findById(topicID)
      .populate('articles')
      .then((data) => res.json(data.articles))
  })

  .post((req, res, next) => {
    const newArticle = new Article(req.body)
    newArticle.save().then((data) => res.json(data))
  })

apiRouter
  .route('/articles')

  .get((req, res, next) => {
    Article.find({}).then((data) => res.json(data))
  })

  .post((req, res, next) => {
    const newArticle = new Article(req.body)
    newArticle.save().then((data) => res.json(data))
  })

apiRouter
  .route('/articles/:articleID')

  .get((req, res, next) => {
    const { articleID } = req.params

    Article.findById(articleID)
      .populate('topics', 'name')
      .then((data) => res.json(data))
  })
  .patch((req, res, next) => {
    const { articleID } = req.params

    const options = {
      runValidators: true,
      returnDocument: 'after',
    }

    Article.findByIdAndUpdate(articleID, req.body, options).then((data) =>
      res.json(data)
    )
  })
  .delete((req, res, next) => {
    const { articleID } = req.params

    Article.findByIdAndDelete(articleID).then((data) => res.json(data))
  })

apiRouter
  .route('/articles/:articleID/topics')

  .get((req, res, next) => {
    const { articleID } = req.params

    Article.findById(articleID)
      .populate('topics', 'name')
      .then((data) => res.json(data.topics))
  })
  .post((req, res, next) => {
    const newTopic = new Topic(req.body)

    newTopic.save().then((data) => res.json(data))
  })

apiRouter
  .route('/search')

  .get((req, res, next) => {
    const query = req.query.query
    console.log(query)

    Article.find({
      $or: [
        { cardTitle: { $regex: query, $options: 'i' } },
        { headline: { $regex: query, $options: 'i' } },
      ],
    }).then((data) => res.json(data))
  })

module.exports = apiRouter
