import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie, onBookNow }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={movie.image} alt={movie.name} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          <strong>Genre:</strong> {movie.genre} <br />
          <strong>Release Date:</strong> {movie.releaseDate} <br />
          <strong>Rating:</strong> ⭐ {movie.rating} / 5 <br />
          <strong>Price:</strong> ₹{movie.price}
        </Card.Text>
        <Button variant="primary" onClick={onBookNow}>
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

