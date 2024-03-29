<img src="https://github.com/kierandidi/news_search_engine/blob/main/root/react-app/src/components/img/athenas-delta-logo/athenas-logo-only.png" alt="logo" width="150"/>

# Athena Delta: Unbiased News Website

This project implements a news website using the MERN stack and is available [here](https://athena-delta.herokuapp.com/).


## Installation

1. Clone this repository: `git clone https://github.com/kierandidi/news_search_engine.git`

2. Run `npm install`

3. Run `npm start`


## API Reference

### /api/topics
- get:
get all the topics

- post:
post a topic;
works but is incomplete

### /api/topics/:topicID
- get:
get a topic with the specific ID from the database

- patch:
edit the specific topic according to input

- delete:
delete the specific topic

### /api/topics/:topicID/articles
- get:
get all the articles under that specific topic

- post:
post a new article;
works but incomplete

### /api/articles
- get:
get all the articles

- post:
post a new article;
works but incomplete

### /api/articles/:articleID
- get:
get an article with the specific ID from the database

- patch:
edit the specific article according to input

- delete:
delete the specific article

### /api/articles/:articleID/topics
- get:
get all the topics under that specific article

- post:
post a new topics;
works but incomplete

### /api/search?query=word
- get:
searches all article headlines for 'word'


## Deployment

This project was deployed using Heroku. See [this article](https://shivanigangadharan.medium.com/accessing-mongodb-uri-from-heroku-for-mern-app-b9ce45e841a5) about strategies to hide the database URI in a Heroku deployment and [this article](https://vivek-kaushal.medium.com/deploying-a-mern-web-app-to-heroku-b12c74c8b3c4) to learn about the deployment process of a MERN application using Heroku.


## Screenshots

![App Screenshot](https://github.com/kierandidi/news_search_engine/blob/main/root/react-app/src/components/img/website_screenshot.png)


## Tech Stack

**Client:** React

**Server:** Node, Express, MongoDB


## Roadmap

- automatically fetch news articles

- incorporate Redux into pipeline

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Logo Font | ![#e0dcf6](https://via.placeholder.com/10/e0dcf6?text=+) #e0dcf6 |
| Logo Sign | ![#eef7fd](https://via.placeholder.com/10/eef7fd?text=+) #eef7fd |
| Navbar | ![#212529](https://via.placeholder.com/10/212529?text=+) #212529 |
| Green | ![#198754](https://via.placeholder.com/10/198754?text=+) #198754 |
| Blue | ![#0d6efd](https://via.placeholder.com/10/0d6efd?text=+) #0d6efd |


## FAQ

#### Why another news website?

Our project was focused around providing different perspectives on topics by showing articles from different geographic regions for the same topic. The idea is that users do not stay stuck in their news bubble, but also get exposure to opinions different than their own and therefore start questioning their assumptions.

### Can I contribute?

Yes! If you have a topic you think is wort to be covered from multiple perspectie, [open an issue](https://github.com/kierandidi/news_search_engine/issues) and include the topic name as well as links to different articles dealing with the topic.


## Authors

- [Kieran Didi (Head of Operations)](https://github.com/kierandidi)
- [Victor Lorenzo Martinez (Head of Communications)](https://github.com/Victorloma)
- [Stephan Pfeiffer (Frontend)](https://github.com/Steph-The-Dev)
- [Vincent Dalla Vecchia (Backend)](https://github.com/Bleikopf)


## Acknowledgements

Thanks a lot to the TechLabs team Düsseldorf, especially to our mentor [Diego](https://github.com/barbunzel)!

