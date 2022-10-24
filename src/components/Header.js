import React from 'react';
import iconProfile from '../images/profileIcon.svg';
import iconSearch from '../images/searchIcon.svg';

export default function Header() {
  return (
    <header>
      <section>
        {/* deverá estar sempre presente; */}
        <img
          data-testid="profile-top-btn"
          src={ iconProfile }
          alt="icon-profile"
        />

        <img
          data-testid="search-top-btn"
          src={ iconSearch }
          alt="icon-search"
        />
        {/* deverá estar sempre presente. */}
        <h1 data-testid="page-title">{ title }</h1>

      </section>
    </header>

  );
}
