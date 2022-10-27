import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Card from 'react-bootstrap/Card';
import RecipeCard from './RecipeCard';

export default function Carousel({ recommendations }) {
  const [count, setCount] = useState(0);

  const recipes = recommendations;
  const recommedationsTreated = recipes.map((e) => ({
    id: e.idDrink || e.idMeal,
    title: e.strDrink || e.strMeal,
    img: e.strDrinkThumb || e.strMealThumb,
  }));

  const btnBack = () => {
    const upperLimit = 4;
    const lowerLimit = 0;
    if (count > lowerLimit) {
      setCount((prevState) => (prevState - 2));
    } if (count === lowerLimit) {
      setCount(upperLimit);
    }
  };

  const btnNext = () => {
    const upperLimit = 4;
    if (count < upperLimit) {
      setCount((prevState) => (prevState + 2));
    } if (count === upperLimit) {
      setCount(0);
    }
  };

  return (
    <section>
      <button
        type="button"
        onClick={ btnBack }
      >
        Back
      </button>
      { recommendations }
      {
        recommedationsTreated.map((recipe, i) => (
          <RecipeCard
            key={ i }
            id={ recipe.id }
            name={ recipe.title }
            img={ recipe.img }
          />
          /*
          <Card
            style={ { width: '18rem' } }
            data-testid={ `${i}-recommendation-card` }
            key={ recipe.id }
            hidden={ !toggleHidden(i) }
          >
            <Card.Img variant="top" src={ recipe.img } />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>

              {<Button variant="primary">Go somewhere</Button>}
            </Card.Body>
          </Card>
          */
        ))
      }
      <button
        type="button"
        onClick={ btnNext }
      >
        Next
      </button>
    </section>
  );
}

Carousel.propTypes = {
  recommendations: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};
// next and back button
// https://stackoverflow.com/questions/63566290/how-to-implement-previous-and-next-buttons-in-react
