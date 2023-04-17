import React, { useState, useEffect } from 'react';
import '../../styles/AccountPage.css'

function AccountPage() {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      firstName,
      lastName,
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setFirstName('');
    setLastName('');
  };

  const renderLoginForm = () => {
    return (
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    );
  };

  const renderAccountInfo = () => {
    return (
      <>
        <p>Welcome {user.firstName} {user.lastName}!</p>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  };

  return (
    <div className="account-page">
      <h1>Please enter your details while we do things in store</h1>
      {user ? renderAccountInfo() : renderLoginForm()}
    </div>
  );
}

export default AccountPage;
