<img src="https://github.com/kierandidi/news_search_engine/blob/main/root/react-app/src/components/img/athenas-delta-logo/athenas-logo-only.png" alt="logo" width="150"/>

# Athena Delta: Unbiased News Website

This project implements a news website using the MERN stack and is available [here](https://athena-delta.herokuapp.com/).


## Installation

Clone this repository:

```bash
  git clone https://github.com/kierandidi/news_search_engine.git
```
    
## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


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

This project was deployed using Heroku.


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
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


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

