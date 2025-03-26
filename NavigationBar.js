import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [darkMode, setDarkMode] = useState(storedTheme === "dark");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
      document.body.classList.remove("bg-light", "text-dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar expand="lg" className={darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}>
      <Container>
        <Navbar.Brand as={Link} to="/">BookMyShow-2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies" className={darkMode ? "text-white" : "text-dark"}>Movies</Nav.Link>
            <Nav.Link as={Link} to="/events" className={darkMode ? "text-white" : "text-dark"}>Events</Nav.Link>
            <Nav.Link as={Link} to="/sports" className={darkMode ? "text-white" : "text-dark"}>Sports</Nav.Link>
            <Nav.Link as={Link} to="/offers" className={darkMode ? "text-white" : "text-dark"}>Offers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" className={darkMode ? "text-white" : "text-dark"}>Sign In</Nav.Link>
            <Nav.Link as={Link} to="/register" className={darkMode ? "text-white" : "text-dark"}>Sign Up</Nav.Link>
            <Button 
              variant={darkMode ? "warning" : "primary"} 
              onClick={toggleMode} 
              className="ms-3"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;





