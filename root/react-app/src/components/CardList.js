import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import NewsCard from './NewsCard';

const CardList = ({ articles }) => {
    return (
        <Container className='mt-5 pt-5'>
            <Row xs={1} md={2} className="g-4">
                {
                    articles.map((article) => {
                        return (
                            <Col key={article._id}>
                                <NewsCard
                                    cardTitle={article.cardTitle}
                                    headline={article.headline}
                                    date={article.date}
                                    img={article.img}
                                    url={article.url}
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