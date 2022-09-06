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
  const [search, setSearch] = useState('');
  const [topics, setTopics] = useState([
    {
      topicId: "global-warming",
      title: "Global Warming",
    },
    {
      topicId: "bitcoin",
      title: "Bitcoin",
    },
    {
      topicId: "abortion",
      title: "Abortion",
    },
    {
      topicId: "inflation",
      title: "Inflation",
    }
  ]);

  useEffect(() => {
    getAllArticles();
  }, []);

  useEffect(() => {
    const searchArcticles = () => {
      Axios.get(`http://localhost:3001/api/search/${search}`).then((response) => {
        setFeed(response.data);
      });
    }
    searchArcticles();
  }, [search]);

  const getAllArticles = () => {
    Axios.get("http://localhost:3001/getArticles").then((response) => {
      setFeed(response.data);
    })
  }

  function changeTopic(topic) {
    Axios.get(`http://localhost:3001/${topic}`).then((response) => {
      setFeed(response.data);
    });
  }

  const onSearch = (q) => {
    setSearch(q);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SharedLayout
            getAllArticles={getAllArticles}
            topics={topics}
            onSearch={onSearch}
            changeTopic={changeTopic}
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
