import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Navbar.css";

function NavbarComponent() {
  const redirectToRegistration = (selectedValue) => {
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }

  return (
    <div>
      <div>
        {console.log("in nav")}
        <nav className="navbar navbar-expand-sm mb-3 c-navcolor">
          <div className="container-fluid">
            <div className="c-webname fw-bold">
              Movie Booking Platform
            </div>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }} className="c-navlink px-4">HOME</Link>
              </li>

              <li>
                <label>Register</label>
                <select onChange={(e) => redirectToRegistration(e.target.value)}>
                  <option value="">Select</option>
                  <option value="/registration">User</option>
                  <option value="/theaterregistration">Theater Owner</option>
                </select>
              </li>

              <li className="nav-item">
                <Link to="/login" style={{ textDecoration: "none" }} className="c-navlink px-4">LOGIN</Link>
              </li>

              <li className="nav-item">
                <Link to="/login" style={{ textDecoration: "none" }} className="c-navlink px-4">MOVIES</Link>
              </li>

              <li className="nav-item">
                <Link to="/login" style={{ textDecoration: "none" }} className="c-navlink px-4">THEATERS</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarComponent;
