import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NewsCard = ({ date, cardTitle, headline, img, url }) => {
  return (
    <Card style={{ marginTop: "20px" }}>
      <Card.Img variant="top" style={{ maxWidth: '634px', maxHeight: '286px', objectFit: 'cover' }} src={img} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{date.slice(0,10)}</Card.Subtitle>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {headline}
        </Card.Text>
        <Button href={url} variant="primary">Read more</Button>
      </Card.Body>
    </Card >
  );
}

export default NewsCard;