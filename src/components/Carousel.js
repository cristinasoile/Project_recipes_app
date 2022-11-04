import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mealRecommendationApi, drinkRecommendationApi } from '../helpers/API';
import '../styles/recipeDetails.css';

export default function Carousel() {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);

  const location = useLocation();

  const meals = async () => {
    const mealsRecommendation = await mealRecommendationApi();
    setRecipes(mealsRecommendation);
  };

  const drinks = async () => {
    const drinksRecommendation = await drinkRecommendationApi();
    setRecipes(drinksRecommendation);
  };

  useEffect(() => {
    const recommendations = async () => {
      const { pathname } = location;
      const recipeType = pathname.includes('meals') ? await drinks() : await meals();
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
      <div className="buttons">
        <button
          className="button-back"
          type="button"
          onClick={ btnBack }
        >
          Back
        </button>

        <button
          className="button-next"
          type="button"
          onClick={ btnNext }
        >
          Next
        </button>
      </div>
      <div className="recipes-icon-drinks">
        {
          recipes.map((e, i) => (
            <div
              className="icon-recipes"
              key={ i }
              data-testid={ `${i}-recommendation-card` }
              hidden={ !toggleHidden(i) }
            >
              <h3 data-testid={ `${i}-recommendation-title` }>{ e.title }</h3>
              <img
                className="img-recipes"
                style={ { width: '100px', maxHeight: '200px' } }
                src={ e.img }
                alt={ e.name }
                data-testid={ `${i}-card-img` }
              />
            </div>
          ))
        }
      </div>
    </section>
  );
}

// next and back button
// https://stackoverflow.com/questions/63566290/how-to-implement-previous-and-next-buttons-in-react
