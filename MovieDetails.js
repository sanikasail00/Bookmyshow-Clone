import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Movie Title {id}</Card.Title>
          <Card.Text>Genre: Action | Rating: 4.5</Card.Text>
          <Button variant="primary">Book Tickets</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieDetails;