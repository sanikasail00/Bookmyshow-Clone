import React from "react";
import "../styles/CarouselComponent.css";

const sportsEvents = [
  {
    name: "Football Championship",
    date: "March 30, 2025",
    location: "National Stadium, Mumbai",
    description: "Watch the top teams battle it out for the championship title."
  },
  {
    name: "Cricket T20 Finals",
    date: "April 15, 2025",
    location: "Eden Gardens, Kolkata",
    description: "Experience the thrill of a high-stakes T20 final with the best players in action."
  },
  {
    name: "Tennis Open",
    date: "May 5, 2025",
    location: "DLTA Complex, Delhi",
    description: "Witness intense singles and doubles matches featuring world-class tennis stars."
  }
];

const Sports = () => {
  return (
    <div className="sports-container">
      <h2>Live Sports Events</h2>
      <p>Book tickets for live matches and experience the thrill of sports!</p>
      <div className="sports-list">
        {sportsEvents.map((event, index) => (
          <div key={index} className="sports-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;

