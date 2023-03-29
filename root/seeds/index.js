const mongoose = require('mongoose')
const Article = require('../models/article')
const Topic = require('../models/topic')
const seed_articles = require('./seed_articles')
const seed_topics = require('./seed_topics')

mongoose.connect('mongodb://localhost:27017/article-database')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Database connected')
})

const seedDB = async () => {
  await Topic.deleteMany({})
  for (let i = 0; i < seed_topics.length; i++) {
    const t = new Topic({
      name: `${seed_topics[i].name}`,
      description: `${seed_topics[i].description}`,
      numOfArticles: `${seed_topics[i].numOfArticles}`,
    })
    console.log(i + 1)
    await t.save()
  }
  await Article.deleteMany({})
  for (let i = 0; i < seed_articles.length; i++) {
    const a = new Article({
      headline: `${seed_articles[i].headline}`,
      topic: `${seed_articles[i].topic}`,
      publisher: `${seed_articles[i].publisher}`,
      country: `${seed_articles[i].country}`,
      date: `${seed_articles[i].date}`,
      img: `${seed_articles[i].img}`,
      url: `${seed_articles[i].url}`,
    })
    console.log(i + 1)
    await a.save()
  }
}

const newSeedDB = async () => {
  await Topic.deleteMany({})
  await Article.deleteMany({})
  console.log('Database cleared')

  const seedsCache = {}

  for (topic of seed_topics) {
    const newTopic = new Topic(topic)
    await newTopic.save().then((data) => {
      seedsCache[data.name] = data.id
    })
  }
  console.log(await Topic.find({}))

  for (article of seed_articles) {
    for (let i = 0; i < article.topics.length; i++) {
      const topicName = article.topics[i]
      foundTopic = await Topic.findOne({ name: topicName })
      article.topics[i] = foundTopic.id
    }
    console.log(article.topics)

    const newArticle = new Article(article)
    const savedArticle = await newArticle.save()

    for (topicId of article.topics) {
      const foundTopic = await Topic.findById(topicId)

      foundTopic.articles.push(savedArticle.id)
      foundTopic.numOfArticles++
      await foundTopic.save()
      console.log(foundTopic)
    }
  }
}

newSeedDB().then(() => {
  mongoose.connection.close()
})
