import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeCard({ id, name, img }) {
  return (
    <div data-testid={ `${id}-recipe-card` }>
      <h3 data-testid={ `${id}-card-name` }>{ name }</h3>
      <img src={ img } alt={ name } data-testid={ `${id}-card-img` } />
    </div>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
