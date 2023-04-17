import React, { useState } from "react";

import { Link } from 'react-router-dom';
import "../../styles/LoginPage.css";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending the data to an API
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form className="signIn" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div><Link to= '/account'>
        <button type="submit">Login</button></Link>
      </form>
    </div>
  );
};

export default LoginPage;
