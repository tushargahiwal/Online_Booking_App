import React, { useEffect, useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserNavbarComponent from './UserNavbarComponent';

function ShowAdd() {
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);

  const init = {
    movieId: 0,
    theaterId: 0,
    dateTime: "",
    time: "",
    availableseats: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };

      case 'reset':
        return init;

      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    fetchMovies();
    fetchTheaters();
  }, []);

  const fetchMovies = () => {
    fetch('http://localhost:8080/movies/movielist')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };

  const fetchTheaters = () => {
    fetch('http://localhost:8080/theatres/list')
      .then(response => response.json())
      .then(data => {
        setTheaters(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching theaters:', error);
      });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const sendTime = new Date(`1970-01-01T${info.time}`);
    const reqOptions = {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...info, time: sendTime.toISOString() })
    };

    try {
      const resp = await fetch("http://localhost:8080/shows/register", reqOptions);
      if (resp.ok) {
        const text = await resp.text();
        const obj = text ? JSON.parse(text) : {};
        console.log(obj);
        if (obj) {
          alert("Shows successfully added");
          // Additional actions after successful submission...
        } else {
          alert("Shows not added successfully");
          // Additional actions after unsuccessful submission...
        }
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error('Error adding shows:', error);
      alert("Error adding shows. Please try again later.");
    }
  };

  return (
    <div>
      <div>
        <h3>Show Add Form</h3>
      </div>
      <div className='d-flex justify-content-around'>
        <Form>
          <h5>Select Movie :</h5>
          <Form.Control
            className="mb-3"
            size="lg"
            as="select"
            name="movieId"
            id="movieId"
            value={info.movieId}
            onChange={(e) => dispatch({ type: 'update', fld: "movieId", val: e.target.value })}
          >
            <option value=""></option> {/* Ensure a default option with an empty value */}
  {movies.map(movie => (
    <option key={movie.movieId} value={movie.movieId}>
      {movie.movieName}
    </option>

            ))}
          </Form.Control>

          <Form.Group>
            <h5>Theater Name :</h5>
            <Form.Control
              className="mb-3"
              size="lg"
              as="select"
              name="theaterId"
              id="theaterId"
              value={info.theaterId}
              
              onChange={(e) => dispatch({ type: 'update', fld: "theaterId", val: e.target.value })}
            >
              <option value=""></option>
              {theaters.map(theater => (
                <option key={theater.theatreId} value={theater.theatreId}>
                  {theater.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <h5>Date:</h5>
            <Form.Control
              className="mb-3"
              size="lg"
              type="date"
              name="dateTime"
              id="dateTime"
              onChange={(e) => dispatch({ type: 'update', fld: "dateTime", val: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group>
            <h5>Time :</h5>
            <Form.Control
              className="mb-3"
              size="lg"
              type="time"
              name="time"
              id="time"
              onChange={(e) => dispatch({ type: 'update', fld: "time", val: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group>
            <h5>Capacity :</h5>
            <Form.Control
              className="mb-3"
              size="lg"
              type="number"
              name="availableseats"
              id="availableseats"
              onChange={(e) => dispatch({ type: 'update', fld: "availableseats", val: e.target.value })}
              required
            />
          </Form.Group>

          <br />
          <Button variant="primary" type="submit" onClick={sendData}>
            Click here to add shows
          </Button>

          <div style={{ marginTop: '10px' }}>
            <Link to="/" className="btn btn-secondary">
              Close
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ShowAdd;
