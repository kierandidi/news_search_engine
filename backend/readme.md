# How to API

## /api/topics
- get
get all the topics

- post
post a topic
works but is incomplete

## /api/topics/:topicID
- get
get a topic with the specific ID from the database

- patch
edit the specific topic according to input

- delete
delete the specific topic

## /api/topics/:topicID/articles
- get
get all the articles under that specific topic

- post
post a new article
works but incomplete

## /api/articles
- get
get all the articles

- post
post a new article
works but incomplete

## /api/articles/:articleID
- get
get an article with the specific ID from the database

- patch
edit the specific article according to input

- delete
delete the specific article

## /api/articles/:articleID/topics
- get
get all the topics under that specific article

- post
post a new topics
works but incomplete

## /api/search?query=word
- get
searches all article headlines for 'word'