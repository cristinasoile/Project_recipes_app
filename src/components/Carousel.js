import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { mealRecommendationApi, drinkRecommendationApi } from '../helpers/API';

export default function Carousel() {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);

  const location = useLocation();

  const x = async () => {
    const mealsRecommendation = await mealRecommendationApi();
    setRecipes(mealsRecommendation);
  };

  const y = async () => {
    const drinksRecommendation = await drinkRecommendationApi();
    setRecipes(drinksRecommendation);
  };

  useEffect(() => {
    const recommendations = async () => {
      const { pathname } = location;
      const recipeType = pathname.includes('meals')
        ? x()
        : y();
      return recipeType;
    };
    recommendations();
  }, [location]);

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

// next and back button
// https://stackoverflow.com/questions/63566290/how-to-implement-previous-and-next-buttons-in-react
