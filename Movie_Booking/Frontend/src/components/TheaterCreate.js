// MovieRegister.js

import React, { useReducer, useState } from 'react';
import '../CSS/movieregister.css'; // Import your CSS file
import { Container, Row } from 'react-bootstrap';

function TheaterCreate() {
  const initialState = {
    name: { value: '', hasError: true, error: '', touched: false },
    location: { value: '', hasError: true, error: '', touched: false },
    capacity: { value: '', hasError: true, error: '', touched: false }
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
        name: user.name.value,
        location: user.location.value,
        capacity: user.capacity.value
      
      }),
    };

    fetch('http://localhost:8080/theatres/register', reqOptions)
      .then((res) => res.text())
      .then((data) => setMsg(data));

    alert('REGISTRATION SUCCESSFULLY');
  };

  return (
   
    <div>
        <Container>
            <Row>
              <h1>Theater registration</h1>
      <form>
        <table>
          <tr>
            <td colSpan={2}>
              <input
                type="text"
                placeholder="Theater Name"
                id="name"
                name="name"
                value={user.name.value}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <input
                type="text"
                placeholder="location"
                id="location"
                name="location"
                value={user.location.value}
                onChange={(e) => handleChange('location', e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <input
                type="text"
                placeholder="capacity"
                id="capacity"
                name="capacity"
                value={user.capacity.value}
                onChange={(e) => handleChange('capacity', e.target.value)}
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

export default TheaterCreate;
