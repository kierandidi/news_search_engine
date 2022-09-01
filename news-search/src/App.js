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

  useEffect(()=> {
    allTopics();
  },[]);

  const allTopics = () => {
    Axios.get("http://localhost:3001/getArticles").then((response)=> {
      setFeed(response.data);
    })
  }

  function changeTopic(topic) {
    Axios.get(`http://localhost:3001/${topic}`).then((response)=> {
      setFeed(response.data);
    });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SharedLayout 
            allTopics={allTopics}
            changeTopicGlobalWarming={() => changeTopic('global-warming')}
            changeTopicBitcoin={() => changeTopic('bitcoin')}
            changeTopicAbortion={() => changeTopic('abortion')}
            changeTopicInflation={() => changeTopic('inflation')}
          />
        }>
          <Route index element={<Home articles={feed}/>} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
