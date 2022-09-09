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
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllArticles();
  }, []);

  useEffect(() => {
    const getAllTopics = () => {
      Axios.get("http://localhost:3001/api/topics").then((response) => {
        setTopics(response.data);
      })
    }
    getAllTopics();
  }, []);

  useEffect(() => {
    const searchArcticles = () => {
      Axios.get(`http://localhost:3001/api/search?query=${search}`).then((response) => {
        setFeed(response.data);
      });
    }
    search ? searchArcticles() : setFeed(feed);
  }, [search, feed]);

  const getAllArticles = () => {
    Axios.get("http://localhost:3001/api/articles").then((response) => {
      setFeed(response.data);
    })
  }

  function changeTopic(topic) {
    Axios.get(`http://localhost:3001/api/topics/${topic}/articles`).then((response) => {
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
