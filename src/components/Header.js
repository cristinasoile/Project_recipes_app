import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconProfile from '../images/profileIcon.svg';
import iconSearch from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/header.css';

export default function Header(props) {
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const { title, search } = props;
  return (
    <header className="header">

      <section className="center">

        <Link to="/profile">
          <button
            className="link-profile"
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

        <h1 data-testid="page-title">{ title }</h1>
        { showInput && <input
          type="text"
          data-testid="search-input"
          value={ input }
          onChange={ ({ target }) => { setInput(target.value); } }
        />}
        {
          search === 'true' ? (
            <button
              className="lupa-icon"
              type="button"
              src={ iconSearch }
              onClick={ () => setShowInput(!showInput) }
            >
              <img
                data-testid="search-top-btn"
                src={ iconSearch }
                alt="icon-search"
              />
            </button>
          ) : null
        }

      </section>
      { search === 'true' && <SearchBar valueSearch={ input } title={ title } /> }
    </header>

  );
}

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.string,
}.isRequired;
