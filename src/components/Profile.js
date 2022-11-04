import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/profile.css';

export default function Profile() {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    const getEmail = JSON.parse(localStorage.getItem('user'));
    if (getEmail) {
      setEmail(getEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="profile">
      <h3
        className="email-profile"
        data-testid="profile-email"
      >
        {Object.values(email)}

      </h3>
      <div>
        <Link to="/done-recipes">
          <button
            className="button-profile"
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            className="button-profile"
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            className="button-profile"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleLogout }
          >
            Logout Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
