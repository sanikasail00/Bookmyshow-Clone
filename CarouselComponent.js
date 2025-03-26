import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CarouselComponent.css";

const movies = [
  {
    title: "Inception",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/m/k/k/small-spos8308-poster-inception-animated-wall-poster-sl-8308-original-imaghzwanmepwc89.jpeg?q=90&crop=false/800x400",
    description: "A thief who enters the dreams of others to steal their secrets is given a chance to have his past crimes forgiven."
  },
  {
    title: "The Dark Knight",
    image: "https://c4.wallpaperflare.com/wallpaper/695/617/246/movies-bane-batman-the-dark-knight-rises-wallpaper-preview.jpg/800x400",
    description: "Batman battles the Joker, a criminal mastermind who seeks to create chaos in Gotham City."
  },
  {
    title: "The Matrix",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR137vxs5qnGX1cvaxj1ELQ6Q1w-wZg7D_WDw&s/800x400",
    description: "A hacker discovers the truth about his reality and joins a rebellion against its controllers."
  },
  {
    title: "Avatar",
    image: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-01/avatar-way-of-water.jpg?itok=3SeSRjXH/800x400",
    description: "A marine on an alien planet becomes torn between following orders and protecting the world he learns to call home."
  },
  {
    title: "Titanic",
    image: "https://images.squarespace-cdn.com/content/v1/5c75dfa97d0c9166551f52b1/1571759141591-I1RAI5I59E74DIYCLY57/Large_3909.jpg/800x400",
    description: "A young couple from different social classes fall in love aboard the ill-fated Titanic."
  }
];

const CarouselComponent = () => {
  const navigate = useNavigate();

  const handleBookNow = (movie) => {
    navigate(`/payment`, { state: { movie } });
  };

  return (
    <div className="container mt-4">
      <Carousel interval={3000} pause={false} indicators={false} controls={true}>
        {movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={movie.image} alt={movie.title} />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <Button variant="primary" onClick={() => handleBookNow(movie)}>
                Book Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

