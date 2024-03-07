import React, { useState, useEffect } from 'react';
import NavbarComponent from './NavbarComponent';
import UserNavbarComponent from './UserNavbarComponent';

export default function TheaterList() {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/theatres/list')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTheaters(data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const theaterrows = theaters.map(theater => (
    <tr key={theater.theaterId}>
      <td>{theater.name}</td>
      <td>{theater.location}</td>
      <td>{theater.capacity}</td>
    </tr>
  ));

  return (
    <div>
     <UserNavbarComponent></UserNavbarComponent>
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2 className="mb-3">Theaters List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>location</th>
              <th>capacity</th>
            </tr>
          </thead>
          <tbody>
           {theaterrows}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
