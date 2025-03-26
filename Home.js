import React, { useState } from "react";
import { Container, Row, Col, Card, Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const latestMovies = [
  { name: "Movie 1", genre: "Action", releaseDate: "2025-03-25", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GHzcvP4M8DWOyBz3X-CqxaJ7oM7QkOILEQ&s" },
  { name: "Movie 2", genre: "Comedy", releaseDate: "2025-04-10", image: "https://static.toiimg.com/photo/95736570.cms" },
  { name: "Movie 3", genre: "Drama", releaseDate: "2025-05-05", image: "https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2017/09/Euphoria.jpg" },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/movies?search=${searchTerm}`);
    }
  };

  return (
    <Container className="mt-5">
      <h2>🎬 Welcome to Movie Booking</h2>

      {/* Search Bar */}
      <Form className="d-flex my-3">
        <FormControl
          type="search"
          placeholder="Search movies..."
          className="me-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </Form>

      {/* Announcements */}
      <h3>📢 Latest Movie Announcements</h3>
      <Row>
        {latestMovies.map((movie, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={movie.image} alt={movie.name} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                  <strong>Genre:</strong> {movie.genre} <br />
                  <strong>Release Date:</strong> {movie.releaseDate}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate("/movies")}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;

