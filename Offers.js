// src/pages/Offers.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const offersData = [
  { title: "Flat 20% Off on Movie Tickets", code: "MOVIE20", image: "https://in.bmscdn.com/offers/offerlisting/indusind-bank-nexxt,-iconia,-duo,-intermiles-credit-card-offer-indbogo.jpg?19032025231301" },
  { title: "Buy 1 Get 1 Free on Events", code: "EVENTSBOGO", image: "https://media.istockphoto.com/id/1177049680/vector/movie-tickets-vector-cinema-ticket-design.jpg?s=612x612&w=0&k=20&c=6gZIUIPsNas6jCs-Vh3SeX7kTu6zGFUEVZDLdQHDvCc=" },
];

const Offers = () => (
  <Container className="mt-5">
    <h2>Offers</h2>
    <Row>
      {offersData.map((offer, index) => (
        <Col md={4} key={index}>
          <Card>
            <Card.Img variant="top" src={offer.image} />
            <Card.Body>
              <Card.Title>{offer.title}</Card.Title>
              <Card.Text>Use Code: {offer.code}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Offers;

