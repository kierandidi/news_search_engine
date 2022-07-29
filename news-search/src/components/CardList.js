import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NewsCard from './NewsCard';

const CardList = ({articles}) => {
    return (
        <Container className='mt-5 pt-5'>
            <Row xs={1} md={2} className="g-4">
                {
                    articles.map( (article, i) => {
                        return (
                            <Col>
                                <NewsCard
                                    key = {i}
                                    id = {articles[i].id}
                                    topic = {articles[i].topic}
                                    publisher = {articles[i].publisher}
                                    headline = {articles[i].headline}
                                    date = {articles[i].date}
                                    img = {articles[i].img}
                                    url = {articles[i].url}
                                />
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default CardList;