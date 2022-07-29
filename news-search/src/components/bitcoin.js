import React from 'react';

import CardList from './CardList';
import {articles} from '../Articles';

// const btc = 'Bitcoin';
// const filteredArticles = {articles}.filter(article => {
//     return article.topic.toLowerCase().includes(btc.toLowerCase())
// });

const Bitcoin = () => {

    return (
        <CardList className='' articles = {{articles}.filter(article => {
                return article.topic.toLowerCase().includes('Bitcoin'.toLowerCase())
             })}/> 
    );
}

export default Bitcoin;