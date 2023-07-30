import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Flights Website</h1>
        <p>Welcome to our flights website. Book your dream flight now!</p>
        <Link to="/Members" className="member-login-button">
          Member Login
        </Link>
        <Link to="/Adminslogin" className="admins-login-button">
          Admins Login
        </Link>
      </header>

      <section className="search-flights">
        <h2>Search Flights</h2>
        <div className="search-form">
          <label htmlFor="departure">Departure Date:</label>
          <input type="date" id="departure" />

          <label htmlFor="return">Return Date:</label>
          <input type="date" id="return" />
          <label htmlFor="adults">Adults:</label>
          <input type="number" id="adults" defaultValue="1" />
          <label htmlFor="kids">Kids:</label>
          <input type="number" id="kids" defaultValue="0" />

          <Link to="/Search-flights" className="search-button">
            Search
          </Link>
        </div>
      </section>
      <div className="cta-buttons">
        <Link to="/Tickets" className="book-now">
          Book Now
        </Link>
        <Link to="/FlightsNo" className="explore-flights">
          Explore Flights
        </Link>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/support">Support</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/report-problem">Seen a Problem? Let Us Know</Link>
        </div>
      </footer>
    </div>
  );
}

