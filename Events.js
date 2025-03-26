// src/pages/Events.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const eventsData = [
  { name: "Music Concert", date: "2025-04-05", location: "Bangalore", price: 500, image: "https://marketplace.canva.com/EAFIygYzkes/1/0/1131w/canva-blue-minimalist-concert-music-cover-poster-CGNgQz4KqL0.jpg" },
  { name: "Comedy Show", date: "2025-04-15", location: "Mumbai", price: 350, image: "https://img.freepik.com/premium-psd/comedy-show-poster-banner-design-template_69464-5195.jpg" },
];

const Events = () => (
  <Container className="mt-5">
    <h2>Events</h2>
    <Row>
      {eventsData.map((event, index) => (
        <Col md={4} key={index}>
          <Card>
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.name}</Card.Title>
              <Card.Text>Date: {event.date}</Card.Text>
              <Card.Text>Location: {event.location}</Card.Text>
              <Card.Text>Price: ₹{event.price}</Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Events;

