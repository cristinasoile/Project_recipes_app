import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconProfile from '../images/profileIcon.svg';
import iconSearch from '../images/searchIcon.svg';

export default function Header(props) {
  const [input, setInput] = useState(false);
  const { title, search } = props;

  return (
    <header>
      <section>
        <Link to="/profile">
          <button
            type="button"
            src={ iconProfile }
          >
            <img
              data-testid="profile-top-btn"
              src={ iconProfile }
              alt="icon-profile"
            />
          </button>
        </Link>
        {
          search === 'true' ? (
            <button
              type="button"
              src={ iconSearch }
              onClick={ () => setInput(!input) }
            >
              <img
                data-testid="search-top-btn"
                src={ iconSearch }
                alt="icon-search"
              />
            </button>
          ) : null
        }

        <h1 data-testid="page-title">{ title }</h1>
        { input && <input type="text" data-testid="search-input" />}
      </section>
    </header>

  );
}

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
}.isRequired;
