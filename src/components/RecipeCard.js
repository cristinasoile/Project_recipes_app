import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ i, id, name, img, type }) {
  return (
    <div className="recipe-card">
      <Link to={ `/${type}/${id}` }>
        <div data-testid={ `${i}-recipe-card` }>
          <h3 data-testid={ `${i}-card-name` }>{ name }</h3>
          <img
            className="img-recipes"
            src={ img }
            alt={ name }
            data-testid={ `${i}-card-img` }
          />
        </div>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  i: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
