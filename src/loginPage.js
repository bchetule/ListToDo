// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginPage.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add authentication logic here, e.g., making an API call to verify credentials

    console.log('Submitted data:', formData);
  };

  const handleLogin = async () => {

    navigate('/main');    
  //   const check = async () =>{
  //     try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       // Authentication successful; store the token and redirect
  //       const data = await response.json();
  //       localStorage.setItem('token', data.token);
  //       // Redirect to the main page or another protected route
  //       window.location.href = '/main';
  //     } else {
  //       setError('Login failed. Please check your credentials.');
  //     }
  //   } catch (error) {
  //     setError('An error occurred during login.');
  //   }
  // }
  
  };



  return (
    <div className="login-page">
      <h2>Login</h2>
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
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
