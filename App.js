import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import "./styles/CarouselComponent.css";
import CarouselComponent from "./components/CarouselComponent";
import MoviePayment from "./components/MoviePayment";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/carousel" element={<CarouselComponent />} />
        <Route path="/payment" element={<MoviePayment />} />
      </Routes>
    </Router>
  );
};

export default App;

