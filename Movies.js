import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const moviesData = [
  {
    name: "Movie 1",
    genre: "Action",
    releaseDate: "2025-03-25",
    rating: 4.5,
    price: 150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9gHxWXNMUr3lMJr4W8rWpVh6vwyjriJ6bQ&s",
  },
  {
    name: "Movie 2",
    genre: "Comedy",
    releaseDate: "2025-04-10",
    rating: 4.2,
    price: 120,
    image:
      "https://boldoutline.in/wp-content/uploads/2019/10/Web-Cover-99.jpg",
  },
  {
    name: "Movie 3",
    genre: "Drama",
    releaseDate: "2025-05-05",
    rating: 4.7,
    price: 180,
    image:
      "https://www.boxofficemovies.in/now/wp-content/uploads/new-poster-of-Nawazuddins-most-awaited-Manjhi.jpg",
  },
];

const Movies = () => {
  const navigate = useNavigate();

  const handleBookNow = (movie) => {
    navigate("/payment", { state: { movie } });
  };

  return (
    <Container className="mt-5">
      <h2>Movies</h2>
      <Row>
        {moviesData.map((movie, index) => (
          <Col md={4} key={index}>
            <MovieCard movie={movie} onBookNow={() => handleBookNow(movie)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;


