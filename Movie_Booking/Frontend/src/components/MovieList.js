import React, { useState, useEffect } from 'react';
import NavbarComponent from './NavbarComponent';
import UserNavbarComponent from './UserNavbarComponent';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/movies/movielist')  
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const movierows = movies.map(movie => (
    <tr key={movie.movieId}>
      <td>{movie.movieName}</td>
      <td>{movie.director}</td>
      <td>{movie.actor}</td>
      <td>{movie.actress}</td>
      <td>{movie.releaseDate}</td>
    </tr>
  ));

  return (
    <div>
      <UserNavbarComponent></UserNavbarComponent>
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2 className="mb-3">Movies List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Director</th>
              <th>Actor</th>
              <th>Actress</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {movierows}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
