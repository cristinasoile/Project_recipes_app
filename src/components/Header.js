import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconProfile from '../images/profileIcon.svg';
import iconSearch from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header(props) {
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
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

        <h1 data-testid="page-title">{ title }</h1>
        { showInput && <input
          type="text"
          data-testid="search-input"
          value={ input }
          onChange={ ({ target }) => { setInput(target.value); } }
        />}
      </section>
      { search === 'true' && <SearchBar valueSearch={ input } title={ title } /> }

    </header>

  );
}

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.string,
}.isRequired;
