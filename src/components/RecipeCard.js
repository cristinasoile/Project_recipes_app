import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ i, id, name, img, type }) {
  return (
    <Link to={ `/${type}/${id}` }>
      <div data-testid={ `${i}-recipe-card` }>
        <h3 data-testid={ `${i}-card-name` }>{ name }</h3>
        <img
          style={ { width: '100px', maxHeight: '200px' } }
          src={ img }
          alt={ name }
          data-testid={ `${i}-card-img` }
        />
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  i: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
