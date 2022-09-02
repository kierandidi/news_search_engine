import { useEffect, useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from "axios";

import Home from './pages/Home';
import SharedLayout from './pages/SharedLayout';
import Error from './pages/Error';

function App() {
  const [feed, setFeed] = useState([]);
  const [search, setSearch] = useState('')
  const [topics, setTopics] = useState([
    {
      topicId: "global-warming",
      title: "Global Warming",
      setQuery() { changeTopic(this.topicId) }
    },
    {
      topicId: "bitcoin",
      title: "Bitcoin",
      setQuery() { changeTopic(this.topicId) }
    },
    {
      topicId: "abortion",
      title: "Abortion",
      setQuery() { changeTopic(this.topicId) }
    },
    {
      topicId: "inflation",
      title: "Inflation",
      setQuery() { changeTopic(this.topicId) }
    }
  ])

  console.log(topics)

  useEffect(() => {
    allArticles();
  }, []);
  // /api/search?query=text

  useEffect(() => {
    const fetchArcticles = () => {
      Axios.get(`http://localhost:3001/api/search/${search}`).then((response)=>{
        setFeed(response.data);
      })
    }
    fetchArcticles();
  }, [search])

  const allArticles = () => {
    Axios.get("http://localhost:3001/getArticles").then((response) => {
      setFeed(response.data);
    })
  }

  function changeTopic(topic) {
    Axios.get(`http://localhost:3001/${topic}`).then((response) => {
      setFeed(response.data);
    });
  }

  const searchFunction = (q) => {
    setSearch(q)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SharedLayout
            allArticles={allArticles}
            topics={topics}
            searchFunction={searchFunction}
          />
        }>
          <Route index element={<Home articles={feed} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
