// MovieRegister.js

import React, { useReducer, useState } from 'react';
import '../CSS/movieregister.css'; // Import your CSS file
import { Container, Row } from 'react-bootstrap';

function MovieRegister() {
  const initialState = {
    movieName: { value: '', hasError: true, error: '', touched: false },
    director: { value: '', hasError: true, error: '', touched: false },
    actor: { value: '', hasError: true, error: '', touched: false },
    actress: { value: '', hasError: true, error: '', touched: false },
    releaseDate: { value: '', hasError: true, error: '', touched: false },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        const { name, value, hasError, error, touched, isFormValid } = action.data;
        return { ...state, [name]: { value, hasError, error, touched }, isFormValid };

      case 'reset':
        return initialState;

      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, initialState);
  const [msg, setMsg] = useState('...');

  const resetData = (e) => {
    e.preventDefault();
    dispatch({ type: 'reset' });
  };

  const handleChange = (name, value) => {
    // Assuming you want to handle changes in input values
    dispatch({
      type: 'update',
      data: {
        name,
        value,
        hasError: false, // You may need to implement validation logic
        error: '',
        touched: true,
      },
    });
  };

  const submitData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        movieName: user.movieName.value,
        director: user.director.value,
        actor: user.actor.value,
        actress: user.actress.value,
        releaseDate: user.releaseDate.value,
      }),
    };

    fetch('http://localhost:8080/movies/register', reqOptions)
      .then((res) => res.text())
      .then((data) => setMsg(data));

    alert('REGISTRATION SUCCESSFULLY');
  };

  return (
   
    <div>
        <Container>
            <Row>
              <h1>movie registration</h1>
      <form>
        <table>
          <tr>
            <td colSpan={2}>
              <input
                type="text"
                placeholder="Movie Name"
                id="movieName"
                name="movieName"
                value={user.movieName.value}
                onChange={(e) => handleChange('movieName', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <input
                type="text"
                placeholder="Director"
                id="director"
                name="director"
                value={user.director.value}
                onChange={(e) => handleChange('director', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <input
                type="text"
                placeholder="Actor"
                id="actor"
                name="actor"
                value={user.actor.value}
                onChange={(e) => handleChange('actor', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <input
                type="text"
                placeholder="Actress"
                id="actress"
                name="actress"
                value={user.actress.value}
                onChange={(e) => handleChange('actress', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <input
                type="date"
                placeholder="Release Date"
                id="releaseDate"
                name="releaseDate"
                value={user.releaseDate.value}
                onChange={(e) => handleChange('releaseDate', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>
              <button type="submit" onClick={(e) => submitData(e)}>
                Register
              </button>
            </td>

            <td>
              <button type="reset" onClick={(e) => resetData(e)}>
                Reset
              </button>
            </td>
          </tr>
        </table>
      </form>
      </Row>
      </Container>
    </div>
    
  );
}

export default MovieRegister;
