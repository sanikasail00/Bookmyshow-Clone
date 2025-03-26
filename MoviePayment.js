import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const MoviePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get movie details safely
  const { movie } = location.state || {
    name: "Default Movie",
    image: "https://via.placeholder.com/800x400",
    price: 0,
  };

  const [seats, setSeats] = useState(1);
  const totalPrice = seats * movie.price;

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`✅ Payment Successful! Paid ₹${totalPrice}`);
    navigate("/"); // Redirect to homepage after payment
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={movie.image} alt={movie.name} />
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <h5>Price: ₹{movie.price} per seat</h5>
              <Form onSubmit={handlePayment}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Seats</Form.Label>
                  <Form.Control
                    type="number"
                    value={seats}
                    onChange={(e) => setSeats(parseInt(e.target.value) || 1)}
                    min="1"
                    max="10"
                  />
                </Form.Group>

                <h4>Total Price: ₹{totalPrice}</h4>
                <Button variant="success" type="submit" className="w-100 mt-3">
                  Pay Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePayment;


