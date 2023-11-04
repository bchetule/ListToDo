// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginPage.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errorMessage , setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') === 'true');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add authentication logic here, e.g., making an API call to verify credentials

    console.log('Submitted data:', formData);
  };

  

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      // User is already registered
      if (
        formData.username === storedUsername &&
        formData.password === storedPassword
      ) {
        // Authentication successful
        setErrorMessage('');
        localStorage.setItem('authenticated', 'true');
        setAuthenticated(true);
      } else {
        // Authentication failed
        setErrorMessage('Invalid username or password');
        localStorage.setItem('authenticated', 'false');
      }
    } else {
      // User is logging in for the first time, so store their credentials
      localStorage.setItem('username', formData.username);
      localStorage.setItem('password', formData.password);
      localStorage.setItem('authenticated', 'true');
      setAuthenticated(true);
      setFormData({ username: '', password: '' }); // Clear input fields
    }
    navigate('/main');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {/* {authenticated ? (
        navigate('/main')
      ) : (
        <div> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>
              {/* {storedUsername && storedPassword ? 'Login' : 'Sign Up'} */}
            Login</button>
      </form>
      {/* {storedUsername && storedPassword ? (
            // Returning user message
            <p>Welcome back!</p>
          ) : (
            // First-time user message
            <p>You've successfully signed up!</p>
          )} */}
          {errorMessage && <p>{errorMessage}</p>}
    {/* </div>
    )} */}
    </div>
  );
}

export default LoginPage;
