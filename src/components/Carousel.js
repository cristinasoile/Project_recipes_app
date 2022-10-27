import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { mealRecommendationApi, drinkRecommendationApi } from '../helpers/API';

export default function Carousel({ type }) {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recommendations = async () => {
      if (type === 'meals') {
        setRecipes(await mealRecommendationApi());
      } else if (type === 'drinks') {
        setRecipes(await drinkRecommendationApi());
      }
    };
    recommendations();
  }, [type]);

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

  const toggleHidden = (i) => (
    i === count || i === count + 1);

  return (
    <section>
      <button
        type="button"
        onClick={ btnBack }
      >
        Back
      </button>
      {
        recipes.map((e, i) => (
          <Card
            style={ { width: '250px' } }
            data-testid={ `${i}-recommendation-card` }
            key={ e.id }
            hidden={ !toggleHidden(i) }
          >
            <Card.Img
              style={ { width: '250px' } }
              variant="top"
              className="card-img"
              src={ e.img }
            />
            <Card.Body>
              <Card.Title
                data-testid={ `${i}-recommendation-title` }
              >
                {e.title}
              </Card.Title>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
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
  type: PropTypes.string.isRequired,
};
// next and back button
// https://stackoverflow.com/questions/63566290/how-to-implement-previous-and-next-buttons-in-react
