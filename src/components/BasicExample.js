// BasicExample.js
import React from 'react';
import { Button, Card } from 'react-bootstrap';

function BasicExample({ title, description, buttonText, image, link }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={image} alt={title} style={{ maxWidth: '100%', height: '180px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link}>
          <Button variant="primary">{buttonText}</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
