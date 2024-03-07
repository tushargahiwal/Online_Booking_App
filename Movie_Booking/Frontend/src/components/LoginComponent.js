// Login.js (React Component)

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/loginstyle.css'; // Import your CSS file
import { BiHide } from 'react-icons/bi';
import NavbarComponent from './NavbarComponent';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null); // New state to store the user ID


  const gotoforget = () => {
    navigate('/forget');
  };

  const gotoHome = () => {
    navigate('/');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users/chklogin', {
        username,
        password,
      });

      const user = response.data;
      console.log(user);

      if (user.roleid == 1) {
        setUserId(user.id); // Store the user ID
        navigate('/profile');
      } else if (user.roleid == 2) {
        setUserId(user.id); // Store the user ID
        navigate('/theater-owner-profile');
      }
    } catch (error) {
      setError('Invalid credentials');
      console.error('Login error', error);
    }
  };


  return (
    <div>
      <NavbarComponent></NavbarComponent>
    <div className="c-loginbox c-login">
      <div className="login">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div  >

      <div  >
      <button onClick={handleLogin} className="c-forgetbtn">
        Login
      </button>
      {error && <p className="error-message">{error}</p>}
      </div>
      </div>

      <div className="c-forgethomebtndiv">
        <button className="c-forgetbtn" onClick={() => gotoforget()}>
          Forget Password
        </button>
        <button className="c-forgetbtn" onClick={() => gotoHome()}>
          Home
        </button>
      </div>
      
    </div>
    </div>

    
  );
};

export default Login;
